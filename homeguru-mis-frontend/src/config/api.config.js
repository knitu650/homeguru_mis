// API Configuration
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verifyToken: '/auth/verify-token',
    twoFactorAuth: '/auth/2fa',
  },

  // Users
  users: {
    list: '/users',
    create: '/users',
    get: '/users/:id',
    update: '/users/:id',
    delete: '/users/:id',
    profile: '/users/profile',
    updateProfile: '/users/profile',
    changePassword: '/users/change-password',
    activityLog: '/users/:id/activity-log',
  },

  // Roles & Permissions
  roles: {
    list: '/roles',
    create: '/roles',
    get: '/roles/:id',
    update: '/roles/:id',
    delete: '/roles/:id',
    permissions: '/roles/:id/permissions',
  },

  permissions: {
    list: '/permissions',
    assign: '/permissions/assign',
  },

  // Institutions
  institutions: {
    list: '/institutions',
    create: '/institutions',
    get: '/institutions/:id',
    update: '/institutions/:id',
    delete: '/institutions/:id',
    branches: '/institutions/:id/branches',
  },

  // Academic
  academicYears: {
    list: '/academic-years',
    create: '/academic-years',
    get: '/academic-years/:id',
    update: '/academic-years/:id',
    delete: '/academic-years/:id',
    active: '/academic-years/active',
  },

  classes: {
    list: '/classes',
    create: '/classes',
    get: '/classes/:id',
    update: '/classes/:id',
    delete: '/classes/:id',
  },

  sections: {
    list: '/sections',
    create: '/sections',
    get: '/sections/:id',
    update: '/sections/:id',
    delete: '/sections/:id',
  },

  subjects: {
    list: '/subjects',
    create: '/subjects',
    get: '/subjects/:id',
    update: '/subjects/:id',
    delete: '/subjects/:id',
  },

  // Students
  students: {
    list: '/students',
    create: '/students',
    get: '/students/:id',
    update: '/students/:id',
    delete: '/students/:id',
    enroll: '/students/:id/enroll',
    documents: '/students/:id/documents',
    academicRecord: '/students/:id/academic-record',
    bulkUpload: '/students/bulk-upload',
  },

  // Teachers
  teachers: {
    list: '/teachers',
    create: '/teachers',
    get: '/teachers/:id',
    update: '/teachers/:id',
    delete: '/teachers/:id',
    assignSubject: '/teachers/:id/assign-subject',
    schedule: '/teachers/:id/schedule',
  },

  // Parents
  parents: {
    list: '/parents',
    create: '/parents',
    get: '/parents/:id',
    update: '/parents/:id',
    delete: '/parents/:id',
    linkStudent: '/parents/:id/link-student',
  },

  // Attendance
  attendance: {
    students: {
      mark: '/attendance/students/mark',
      list: '/attendance/students',
      report: '/attendance/students/report',
      bulk: '/attendance/students/bulk',
    },
    teachers: {
      mark: '/attendance/teachers/mark',
      list: '/attendance/teachers',
      report: '/attendance/teachers/report',
    },
  },

  // Assignments
  assignments: {
    list: '/assignments',
    create: '/assignments',
    get: '/assignments/:id',
    update: '/assignments/:id',
    delete: '/assignments/:id',
    submit: '/assignments/:id/submit',
    submissions: '/assignments/:id/submissions',
    grade: '/assignments/:id/grade',
  },

  // Examinations
  exams: {
    list: '/exams',
    create: '/exams',
    get: '/exams/:id',
    update: '/exams/:id',
    delete: '/exams/:id',
    schedule: '/exams/:id/schedule',
  },

  results: {
    entry: '/results/entry',
    list: '/results',
    get: '/results/:id',
    reportCard: '/results/:studentId/report-card',
  },

  // Fees
  feeStructures: {
    list: '/fee-structures',
    create: '/fee-structures',
    get: '/fee-structures/:id',
    update: '/fee-structures/:id',
    delete: '/fee-structures/:id',
  },

  invoices: {
    list: '/invoices',
    create: '/invoices',
    get: '/invoices/:id',
    update: '/invoices/:id',
    delete: '/invoices/:id',
  },

  payments: {
    create: '/payments',
    list: '/payments',
    get: '/payments/:id',
    defaulters: '/payments/defaulters',
    history: '/payments/:studentId/history',
  },

  // HR
  employees: {
    list: '/employees',
    create: '/employees',
    get: '/employees/:id',
    update: '/employees/:id',
    delete: '/employees/:id',
  },

  departments: {
    list: '/departments',
    create: '/departments',
    get: '/departments/:id',
    update: '/departments/:id',
    delete: '/departments/:id',
  },

  recruitment: {
    jobPostings: '/recruitment/job-postings',
    applications: '/recruitment/applications',
    interviews: '/recruitment/interviews',
  },

  // Payroll
  payroll: {
    structures: '/payroll/structures',
    process: '/payroll/process',
    payslips: '/payroll/payslips',
    reports: '/payroll/reports',
  },

  // Leave
  leave: {
    types: '/leave/types',
    applications: '/leave/applications',
    approve: '/leave/applications/:id/approve',
    reject: '/leave/applications/:id/reject',
    balance: '/leave/balance',
  },

  // Performance
  appraisals: {
    list: '/appraisals',
    create: '/appraisals',
    get: '/appraisals/:id',
    submit: '/appraisals/:id/submit',
    review: '/appraisals/:id/review',
  },

  // Communication
  announcements: {
    list: '/announcements',
    create: '/announcements',
    get: '/announcements/:id',
    update: '/announcements/:id',
    delete: '/announcements/:id',
  },

  messages: {
    list: '/messages',
    send: '/messages',
    get: '/messages/:id',
    conversations: '/messages/conversations',
  },

  notifications: {
    list: '/notifications',
    markRead: '/notifications/:id/read',
    markAllRead: '/notifications/read-all',
  },

  // Timetable
  timetable: {
    list: '/timetable',
    create: '/timetable',
    get: '/timetable/:id',
    update: '/timetable/:id',
    conflicts: '/timetable/conflicts',
    teacher: '/timetable/teacher/:id',
    student: '/timetable/student/:id',
    class: '/timetable/class/:id',
  },

  // Transport
  transport: {
    routes: '/transport/routes',
    vehicles: '/transport/vehicles',
    drivers: '/transport/drivers',
    allocations: '/transport/allocations',
    tracking: '/transport/tracking/:vehicleId',
  },

  // Hostel
  hostel: {
    list: '/hostels',
    rooms: '/hostels/:id/rooms',
    allocations: '/hostel/allocations',
    attendance: '/hostel/attendance',
    visitors: '/hostel/visitors',
    mess: '/hostel/mess-menu',
  },

  // Library
  library: {
    books: '/library/books',
    issue: '/library/issue',
    return: '/library/return',
    reservations: '/library/reservations',
    fines: '/library/fines',
  },

  // Learning Resources
  resources: {
    list: '/learning-resources',
    create: '/learning-resources',
    get: '/learning-resources/:id',
    update: '/learning-resources/:id',
    delete: '/learning-resources/:id',
    download: '/learning-resources/:id/download',
  },

  // Events
  events: {
    list: '/events',
    create: '/events',
    get: '/events/:id',
    update: '/events/:id',
    delete: '/events/:id',
    register: '/events/:id/register',
    participants: '/events/:id/participants',
  },

  holidays: {
    list: '/holidays',
    create: '/holidays',
    update: '/holidays/:id',
    delete: '/holidays/:id',
  },

  // Helpdesk
  tickets: {
    list: '/tickets',
    create: '/tickets',
    get: '/tickets/:id',
    update: '/tickets/:id',
    comment: '/tickets/:id/comments',
    assign: '/tickets/:id/assign',
    close: '/tickets/:id/close',
  },

  // Reports
  reports: {
    student: '/reports/student',
    attendance: '/reports/attendance',
    financial: '/reports/financial',
    academic: '/reports/academic',
    custom: '/reports/custom',
    export: '/reports/export',
  },

  // Settings
  settings: {
    get: '/settings',
    update: '/settings',
    general: '/settings/general',
    email: '/settings/email',
    sms: '/settings/sms',
    backup: '/settings/backup',
    logs: '/settings/logs',
  },

  // Dashboard
  dashboard: {
    admin: '/dashboard/admin',
    teacher: '/dashboard/teacher',
    student: '/dashboard/student',
    parent: '/dashboard/parent',
    stats: '/dashboard/stats',
  },

  // File Upload
  upload: {
    single: '/upload/single',
    multiple: '/upload/multiple',
  },
};

export default API_CONFIG;
