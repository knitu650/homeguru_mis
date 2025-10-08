// Permissions Configuration
export const PERMISSIONS = {
  // Dashboard
  DASHBOARD_VIEW: 'dashboard.view',

  // Users
  USER_VIEW: 'user.view',
  USER_CREATE: 'user.create',
  USER_UPDATE: 'user.update',
  USER_DELETE: 'user.delete',

  // Roles
  ROLE_VIEW: 'role.view',
  ROLE_CREATE: 'role.create',
  ROLE_UPDATE: 'role.update',
  ROLE_DELETE: 'role.delete',

  // Institutions
  INSTITUTION_VIEW: 'institution.view',
  INSTITUTION_CREATE: 'institution.create',
  INSTITUTION_UPDATE: 'institution.update',
  INSTITUTION_DELETE: 'institution.delete',

  // Students
  STUDENT_VIEW: 'student.view',
  STUDENT_CREATE: 'student.create',
  STUDENT_UPDATE: 'student.update',
  STUDENT_DELETE: 'student.delete',
  STUDENT_ENROLL: 'student.enroll',

  // Teachers
  TEACHER_VIEW: 'teacher.view',
  TEACHER_CREATE: 'teacher.create',
  TEACHER_UPDATE: 'teacher.update',
  TEACHER_DELETE: 'teacher.delete',

  // Parents
  PARENT_VIEW: 'parent.view',
  PARENT_CREATE: 'parent.create',
  PARENT_UPDATE: 'parent.update',
  PARENT_DELETE: 'parent.delete',

  // Attendance
  ATTENDANCE_VIEW: 'attendance.view',
  ATTENDANCE_MARK: 'attendance.mark',
  ATTENDANCE_REPORT: 'attendance.report',

  // Assignments
  ASSIGNMENT_VIEW: 'assignment.view',
  ASSIGNMENT_CREATE: 'assignment.create',
  ASSIGNMENT_UPDATE: 'assignment.update',
  ASSIGNMENT_DELETE: 'assignment.delete',
  ASSIGNMENT_GRADE: 'assignment.grade',

  // Examinations
  EXAM_VIEW: 'exam.view',
  EXAM_CREATE: 'exam.create',
  EXAM_UPDATE: 'exam.update',
  EXAM_DELETE: 'exam.delete',
  RESULT_ENTRY: 'result.entry',
  RESULT_VIEW: 'result.view',

  // Fees
  FEE_VIEW: 'fee.view',
  FEE_CREATE: 'fee.create',
  FEE_UPDATE: 'fee.update',
  FEE_DELETE: 'fee.delete',
  PAYMENT_PROCESS: 'payment.process',

  // HR
  EMPLOYEE_VIEW: 'employee.view',
  EMPLOYEE_CREATE: 'employee.create',
  EMPLOYEE_UPDATE: 'employee.update',
  EMPLOYEE_DELETE: 'employee.delete',

  // Payroll
  PAYROLL_VIEW: 'payroll.view',
  PAYROLL_PROCESS: 'payroll.process',

  // Leave
  LEAVE_VIEW: 'leave.view',
  LEAVE_APPLY: 'leave.apply',
  LEAVE_APPROVE: 'leave.approve',

  // Communication
  ANNOUNCEMENT_VIEW: 'announcement.view',
  ANNOUNCEMENT_CREATE: 'announcement.create',
  MESSAGE_SEND: 'message.send',

  // Reports
  REPORT_VIEW: 'report.view',
  REPORT_EXPORT: 'report.export',

  // Settings
  SETTINGS_VIEW: 'settings.view',
  SETTINGS_UPDATE: 'settings.update',
};

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  PRINCIPAL: 'principal',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
  ACCOUNTANT: 'accountant',
  LIBRARIAN: 'librarian',
  RECEPTIONIST: 'receptionist',
};

export const ROLE_PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: Object.values(PERMISSIONS),
  [ROLES.ADMIN]: Object.values(PERMISSIONS).filter(
    p => !p.startsWith('settings')
  ),
  [ROLES.TEACHER]: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.STUDENT_VIEW,
    PERMISSIONS.ATTENDANCE_VIEW,
    PERMISSIONS.ATTENDANCE_MARK,
    PERMISSIONS.ASSIGNMENT_VIEW,
    PERMISSIONS.ASSIGNMENT_CREATE,
    PERMISSIONS.ASSIGNMENT_UPDATE,
    PERMISSIONS.ASSIGNMENT_GRADE,
    PERMISSIONS.EXAM_VIEW,
    PERMISSIONS.RESULT_ENTRY,
    PERMISSIONS.MESSAGE_SEND,
  ],
  [ROLES.STUDENT]: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.ATTENDANCE_VIEW,
    PERMISSIONS.ASSIGNMENT_VIEW,
    PERMISSIONS.EXAM_VIEW,
    PERMISSIONS.RESULT_VIEW,
    PERMISSIONS.FEE_VIEW,
  ],
  [ROLES.PARENT]: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.STUDENT_VIEW,
    PERMISSIONS.ATTENDANCE_VIEW,
    PERMISSIONS.RESULT_VIEW,
    PERMISSIONS.FEE_VIEW,
  ],
};

export default PERMISSIONS;
