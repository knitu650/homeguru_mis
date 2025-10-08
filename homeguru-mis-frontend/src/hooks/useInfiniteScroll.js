import { useState, useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = (options = {}) => {
  const {
    fetchMore,
    hasMore = true,
    threshold = 1.0,
    rootMargin = '0px',
    initialPage = 1,
    initialLoading = false,
  } = options;

  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(null);
  const [hasMoreData, setHasMoreData] = useState(hasMore);

  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  // Load more data
  const loadMore = useCallback(async () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchMore(page);
      
      // Check if there's more data
      if (result?.hasMore !== undefined) {
        setHasMoreData(result.hasMore);
      }

      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message || 'Failed to load more data');
    } finally {
      setLoading(false);
    }
  }, [fetchMore, page, loading, hasMoreData]);

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && hasMoreData && !loading) {
        loadMore();
      }
    }, options);

    const currentTarget = loadMoreRef.current;
    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (currentTarget && observerRef.current) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, [hasMoreData, loading, loadMore, threshold, rootMargin]);

  // Reset to initial state
  const reset = useCallback(() => {
    setPage(initialPage);
    setLoading(false);
    setError(null);
    setHasMoreData(true);
  }, [initialPage]);

  // Manual load more (for button-based loading)
  const manualLoadMore = useCallback(() => {
    loadMore();
  }, [loadMore]);

  return {
    loadMoreRef,
    loading,
    error,
    hasMore: hasMoreData,
    page,
    loadMore: manualLoadMore,
    reset,
  };
};

// Alternative: Scroll-based infinite scroll (without Intersection Observer)
export const useScrollInfiniteScroll = (options = {}) => {
  const {
    fetchMore,
    hasMore = true,
    threshold = 200,
    initialPage = 1,
  } = options;

  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMoreData, setHasMoreData] = useState(hasMore);

  const containerRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchMore(page);
      
      if (result?.hasMore !== undefined) {
        setHasMoreData(result.hasMore);
      }

      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message || 'Failed to load more data');
    } finally {
      setLoading(false);
    }
  }, [fetchMore, page, loading, hasMoreData]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrolledToBottom = scrollHeight - scrollTop - clientHeight < threshold;

      if (scrolledToBottom && hasMoreData && !loading) {
        loadMore();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [hasMoreData, loading, loadMore, threshold]);

  const reset = useCallback(() => {
    setPage(initialPage);
    setLoading(false);
    setError(null);
    setHasMoreData(true);
  }, [initialPage]);

  return {
    containerRef,
    loading,
    error,
    hasMore: hasMoreData,
    page,
    loadMore,
    reset,
  };
};

// Window-based infinite scroll
export const useWindowInfiniteScroll = (options = {}) => {
  const {
    fetchMore,
    hasMore = true,
    threshold = 200,
    initialPage = 1,
  } = options;

  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMoreData, setHasMoreData] = useState(hasMore);

  const loadMore = useCallback(async () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchMore(page);
      
      if (result?.hasMore !== undefined) {
        setHasMoreData(result.hasMore);
      }

      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message || 'Failed to load more data');
    } finally {
      setLoading(false);
    }
  }, [fetchMore, page, loading, hasMoreData]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrolledToBottom = scrollHeight - scrollTop - clientHeight < threshold;

      if (scrolledToBottom && hasMoreData && !loading) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMoreData, loading, loadMore, threshold]);

  const reset = useCallback(() => {
    setPage(initialPage);
    setLoading(false);
    setError(null);
    setHasMoreData(true);
  }, [initialPage]);

  return {
    loading,
    error,
    hasMore: hasMoreData,
    page,
    loadMore,
    reset,
  };
};

export default useInfiniteScroll;
