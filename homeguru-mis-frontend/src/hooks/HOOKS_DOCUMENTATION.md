# Custom Hooks Documentation

Comprehensive guide to all custom React hooks in the HomeGuru MIS application.

## Table of Contents

1. [useApi](#useapi) - API calls with loading/error states
2. [useDebounce](#usedebounce) - Debounce values
3. [useLocalStorage](#uselocalstorage) - Local storage state
4. [useSessionStorage](#usesessionstorage) - Session storage state
5. [useForm](#useform) - Form handling with validation
6. [useModal](#usemodal) - Modal state management
7. [useToast](#usetoast) - Toast notifications
8. [usePagination](#usepagination) - Client-side pagination
9. [useSort](#usesort) - Data sorting
10. [useFilter](#usefilter) - Data filtering
11. [usePermission](#usepermission) - Permission checks
12. [useTheme](#usetheme) - Theme management
13. [useMediaQuery](#usemediaquery) - Responsive breakpoints
14. [useClickOutside](#useclickoutside) - Click outside detection
15. [useFileUpload](#usefileupload) - File upload handling
16. [useInfiniteScroll](#useinfinitescroll) - Infinite scroll

---

## useApi

Handle API calls with automatic loading and error states.

### Usage

```javascript
import { useApi } from '@hooks';

function MyComponent() {
  const { loading, error, get, post } = useApi();

  const fetchData = async () => {
    try {
      const data = await get('/api/users');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {loading && <Spinner />}
      {error && <Alert variant="error">{error}</Alert>}
    </div>
  );
}
```

### API

- `loading` - Boolean indicating loading state
- `error` - Error message string or null
- `get(url, config)` - GET request
- `post(url, data, config)` - POST request
- `put(url, data, config)` - PUT request
- `patch(url, data, config)` - PATCH request
- `del(url, config)` - DELETE request

---

## useDebounce

Debounce a value to limit update frequency.

### Usage

```javascript
import { useDebounce } from '@hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // Perform search
      searchAPI(debouncedSearch);
    }
  }, [debouncedSearch]);

  return <Input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />;
}
```

### API

- `useDebounce(value, delay)` - Returns debounced value
  - `value` - Value to debounce
  - `delay` - Delay in milliseconds (default: 500)

---

## useLocalStorage

Persist state in localStorage with automatic syncing.

### Usage

```javascript
import { useLocalStorage } from '@hooks';

function PreferencesComponent() {
  const [preferences, setPreferences] = useLocalStorage('user-preferences', {
    notifications: true,
    theme: 'light',
  });

  return (
    <Toggle
      checked={preferences.notifications}
      onChange={value => setPreferences({ ...preferences, notifications: value })}
    />
  );
}
```

### API

- `[value, setValue]` - State tuple like useState
- Automatically syncs across tabs/windows
- Handles JSON serialization

---

## useSessionStorage

Similar to useLocalStorage but uses sessionStorage (cleared on tab close).

### Usage

```javascript
import { useSessionStorage } from '@hooks';

function FormComponent() {
  const [formData, setFormData, removeFormData] = useSessionStorage('form-draft', {});

  return (
    <form>
      {/* Form fields */}
      <Button onClick={removeFormData}>Clear Draft</Button>
    </form>
  );
}
```

### API

- `[value, setValue, removeValue]` - State tuple with remove function

---

## useForm

Form handling with validation support.

### Usage

```javascript
import { useForm } from '@hooks';

function LoginForm() {
  const validate = values => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, reset } = useForm(
    { email: '', password: '' },
    validate
  );

  const onSubmit = values => {
    console.log('Form submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
```

### API

- `values` - Current form values
- `errors` - Validation errors
- `touched` - Touched fields
- `handleChange` - Input change handler
- `handleBlur` - Input blur handler
- `handleSubmit(callback)` - Form submit handler
- `reset()` - Reset form
- `setFieldValue(name, value)` - Set specific field

---

## useModal

Modal state management.

### Usage

```javascript
import { useModal } from '@hooks';

function MyComponent() {
  const { isOpen, open, close, toggle } = useModal();

  return (
    <>
      <Button onClick={open}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={close}>
        <h2>Modal Content</h2>
      </Modal>
    </>
  );
}
```

### API

- `isOpen` - Boolean modal state
- `open()` - Open modal
- `close()` - Close modal
- `toggle()` - Toggle modal

---

## useToast

Toast notification management.

### Usage

```javascript
import { useToast } from '@hooks';

function MyComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('Operation successful!');
  };

  const handleError = () => {
    toast.error('Something went wrong');
  };

  const handlePromise = async () => {
    const promise = fetchData();
    toast.promise(promise, {
      pending: 'Loading...',
      success: 'Data loaded!',
      error: 'Failed to load data',
    });
  };

  return <Button onClick={handleSuccess}>Show Toast</Button>;
}
```

### API

- `success(message, options)` - Success toast
- `error(message, options)` - Error toast
- `warning(message, options)` - Warning toast
- `info(message, options)` - Info toast
- `promise(promise, messages)` - Promise-based toast
- `loading(message, options)` - Loading toast
- `dismiss(toastId)` - Dismiss toast
- `update(toastId, options)` - Update toast

---

## usePagination

Client-side pagination.

### Usage

```javascript
import { usePagination } from '@hooks';

function DataList({ data }) {
  const {
    currentPage,
    totalPages,
    currentData,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(data, 10);

  return (
    <>
      <List items={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </>
  );
}
```

### API

- `currentPage` - Current page number
- `totalPages` - Total number of pages
- `currentData` - Data for current page
- `goToPage(page)` - Go to specific page
- `nextPage()` - Go to next page
- `prevPage()` - Go to previous page
- `hasNextPage` - Boolean if next page exists
- `hasPrevPage` - Boolean if previous page exists

---

## useSort

Data sorting with direction toggle.

### Usage

```javascript
import { useSort } from '@hooks';

function SortableTable({ data }) {
  const { sortedData, sortColumn, sortDirection, handleSort } = useSort(data);

  return (
    <Table
      data={sortedData}
      onSort={handleSort}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  );
}
```

### API

- `sortedData` - Sorted data array
- `sortColumn` - Current sort column
- `sortDirection` - 'asc' or 'desc'
- `handleSort(column)` - Sort by column
- `resetSort()` - Reset to initial state
- `setSortConfig(column, direction)` - Set sort config

---

## useFilter

Advanced data filtering with multiple operators.

### Usage

```javascript
import { useFilter } from '@hooks';

function FilterableList({ data }) {
  const {
    filteredData,
    filters,
    setFilter,
    clearFilters,
    hasActiveFilters,
  } = useFilter(data);

  return (
    <>
      <Input
        placeholder="Search name"
        onChange={e => setFilter('name', e.target.value)}
      />
      <Select
        options={statusOptions}
        onChange={value => setFilter('status', value)}
      />
      {hasActiveFilters && <Button onClick={clearFilters}>Clear Filters</Button>}
      <List items={filteredData} />
    </>
  );
}
```

### Advanced Filtering

```javascript
// Operator-based filtering
setFilter('age', { operator: 'greaterThan', value: 18 });
setFilter('salary', { operator: 'between', value: [30000, 50000] });
setFilter('department', { operator: 'in', value: ['IT', 'HR'] });
```

### API

- `filteredData` - Filtered data array
- `filters` - Current filter config
- `setFilter(key, value)` - Set single filter
- `removeFilter(key)` - Remove filter
- `clearFilters()` - Clear all filters
- `setMultipleFilters(filters)` - Set multiple filters
- `hasActiveFilters` - Boolean if filters active

### Supported Operators

- `equals`, `notEquals`
- `contains`, `startsWith`, `endsWith`
- `greaterThan`, `greaterThanOrEqual`
- `lessThan`, `lessThanOrEqual`
- `between`, `in`, `notIn`

---

## usePermission

Permission and role-based access control.

### Usage

```javascript
import { usePermission } from '@hooks';

function ProtectedComponent() {
  const {
    hasPermission,
    hasRole,
    canAccess,
    isAdmin,
  } = usePermission();

  if (!hasPermission('user.create')) {
    return <AccessDenied />;
  }

  return (
    <>
      {canAccess('students', 'edit') && <EditButton />}
      {isAdmin && <AdminPanel />}
    </>
  );
}
```

### API

- `hasPermission(permission)` - Check single permission
- `hasAllPermissions(permissions)` - Check all permissions
- `hasAnyPermission(permissions)` - Check any permission
- `hasRole(role)` - Check role
- `hasAnyRole(roles)` - Check any role
- `canAccess(resource, action)` - Check resource access
- `isAuthenticated` - User authenticated
- `isAdmin` - User is admin
- `isSuperAdmin` - User is super admin
- `userPermissions` - Array of user permissions
- `currentUser` - Current user object

---

## useTheme

Theme management with system preference detection.

### Usage

```javascript
import { useTheme } from '@hooks';

function ThemeToggle() {
  const { theme, toggleTheme, isDark, setDarkTheme, setLightTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
```

### API

- `theme` - Current theme ('light' or 'dark')
- `isDark` - Boolean if dark theme
- `isLight` - Boolean if light theme
- `setTheme(theme)` - Set specific theme
- `toggleTheme()` - Toggle between themes
- `setLightTheme()` - Set light theme
- `setDarkTheme()` - Set dark theme
- `getSystemTheme()` - Get system preference
- `useSystemTheme()` - Apply system theme
- `availableThemes` - Array of available themes

---

## useMediaQuery

Responsive design with media queries.

### Usage

```javascript
import { useMediaQuery, useIsMobile, useIsDesktop } from '@hooks';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isLargeScreen = useMediaQuery('(min-width: 1920px)');
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      {isLargeScreen && <SidePanel />}
    </>
  );
}
```

### Helper Hooks

- `useIsMobile()` - Max width 768px
- `useIsTablet()` - 768px to 1024px
- `useIsDesktop()` - Min width 1024px
- `useIsSmallScreen()` - Max width 640px
- `useIsLargeScreen()` - Min width 1280px
- `useIsPortrait()` - Portrait orientation
- `useIsLandscape()` - Landscape orientation
- `usePrefersReducedMotion()` - Reduced motion preference
- `usePrefersDarkMode()` - Dark mode preference
- `useIsTouchDevice()` - Touch device
- `useIsRetina()` - Retina display

---

## useClickOutside

Detect clicks outside an element.

### Usage

```javascript
import { useClickOutside } from '@hooks';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={ref}>
      <Button onClick={() => setIsOpen(true)}>Toggle</Button>
      {isOpen && <DropdownMenu />}
    </div>
  );
}
```

### Multiple Refs

```javascript
import { useClickOutsideMultiple } from '@hooks';

function MultiComponent() {
  const { addRef } = useClickOutsideMultiple(() => {
    // Handle click outside both elements
  });

  return (
    <>
      <div ref={addRef}>Element 1</div>
      <div ref={addRef}>Element 2</div>
    </>
  );
}
```

### API

- `useClickOutside(callback, enabled)` - Returns ref
- `useClickOutsideMultiple(callback, enabled)` - Returns { addRef, removeRef }
- `useClickOutsideWithEvents(callback, events, enabled)` - Custom events

---

## useFileUpload

File upload with validation and progress tracking.

### Usage

```javascript
import { useFileUpload } from '@hooks';

function FileUploader() {
  const {
    files,
    uploading,
    uploadProgress,
    error,
    handleFileSelect,
    uploadFiles,
    removeFile,
    getInputProps,
    getDropZoneProps,
  } = useFileUpload({
    url: '/api/upload',
    maxSize: 5242880, // 5MB
    allowedTypes: ['image/jpeg', 'image/png'],
    multiple: true,
  });

  return (
    <div {...getDropZoneProps()}>
      <input {...getInputProps()} />
      {files.map((file, index) => (
        <FilePreview
          key={index}
          file={file}
          onRemove={() => removeFile(index)}
        />
      ))}
      {files.length > 0 && (
        <Button onClick={() => uploadFiles()} loading={uploading}>
          Upload {files.length} file(s)
        </Button>
      )}
      {uploading && <ProgressBar value={uploadProgress} />}
    </div>
  );
}
```

### API

- `files` - Array of selected files
- `uploading` - Upload in progress
- `uploadProgress` - Progress percentage (0-100)
- `error` - Error message or null
- `uploadedFiles` - Successfully uploaded files
- `handleFileSelect(files)` - Handle file selection
- `uploadFiles(files)` - Upload files
- `removeFile(index)` - Remove file from list
- `clearFiles()` - Clear all files
- `reset()` - Reset all state
- `getInputProps()` - Props for file input
- `getDropZoneProps()` - Props for drop zone

---

## useInfiniteScroll

Infinite scroll with Intersection Observer or scroll events.

### Usage

```javascript
import { useInfiniteScroll } from '@hooks';

function InfiniteList() {
  const [items, setItems] = useState([]);

  const fetchMore = async (page) => {
    const newItems = await fetchItemsFromAPI(page);
    setItems(prev => [...prev, ...newItems]);
    return { hasMore: newItems.length > 0 };
  };

  const { loadMoreRef, loading, hasMore } = useInfiniteScroll({
    fetchMore,
    hasMore: true,
  });

  return (
    <div>
      {items.map(item => <Item key={item.id} {...item} />)}
      {hasMore && <div ref={loadMoreRef}>Loading...</div>}
      {loading && <Spinner />}
    </div>
  );
}
```

### Scroll-based Version

```javascript
import { useScrollInfiniteScroll } from '@hooks';

function ScrollList() {
  const { containerRef, loading, hasMore } = useScrollInfiniteScroll({
    fetchMore,
    threshold: 200, // pixels from bottom
  });

  return (
    <div ref={containerRef} style={{ height: '500px', overflow: 'auto' }}>
      {/* content */}
    </div>
  );
}
```

### Window Scroll Version

```javascript
import { useWindowInfiniteScroll } from '@hooks';

function PageList() {
  const { loading, hasMore, reset } = useWindowInfiniteScroll({
    fetchMore,
    threshold: 200,
  });

  return (
    <div>
      {/* content */}
      {loading && <Spinner />}
    </div>
  );
}
```

### API

- `loadMoreRef` - Ref for observer target (Intersection Observer version)
- `containerRef` - Ref for scroll container (Scroll version)
- `loading` - Loading state
- `error` - Error message
- `hasMore` - More data available
- `page` - Current page number
- `loadMore()` - Manual load more
- `reset()` - Reset to initial state

---

## Best Practices

### 1. Import Only What You Need

```javascript
// Good
import { useDebounce, useModal } from '@hooks';

// Also good for tree-shaking
import useDebounce from '@hooks/useDebounce';
```

### 2. Combine Hooks

```javascript
function SearchableTable({ data }) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  
  const { filteredData } = useFilter(data, { name: debouncedSearch });
  const { sortedData, handleSort } = useSort(filteredData);
  const { currentData, ...pagination } = usePagination(sortedData, 10);

  return <Table data={currentData} onSort={handleSort} />;
}
```

### 3. Memoize Callbacks

```javascript
const { fetchMore } = useInfiniteScroll({
  fetchMore: useCallback(async (page) => {
    // fetch logic
  }, [dependencies]),
});
```

### 4. Error Handling

```javascript
const { uploadFiles } = useFileUpload();

try {
  await uploadFiles();
  toast.success('Upload successful');
} catch (error) {
  toast.error(error.message);
}
```

---

## Examples

See the `/examples` directory for complete working examples of each hook.
