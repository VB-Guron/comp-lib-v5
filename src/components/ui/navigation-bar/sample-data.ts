import { NavRoute, User, CompanyLogo } from "./types";
import { navigationIcons } from "../../../config/images";

// Sample company logo (optional - PayPlus logos are used by default)
export const sampleLogo: CompanyLogo = {
  src: "https://via.placeholder.com/160x60/0066cc/ffffff?text=COMPANY",
  darkMode: "https://via.placeholder.com/160x60/ffffff/000000?text=COMPANY",
  alt: "Company Logo"
};

// Sample admin user data
export const sampleAdminUser: User = {
  data: {
    isAdmin: true,
    name: "John Admin",
    email: "john.admin@company.com"
  }
};

// Sample employee user data
export const sampleEmployeeUser: User = {
  data: {
    isAdmin: false,
    name: "Jane Employee",
    email: "jane.employee@company.com"
  }
};

// For backward compatibility
export const sampleUser = sampleAdminUser;

// Sample admin routes (simplified from PayPlus)
export const sampleAdminRoutes: NavRoute[] = [
  {
    label: "Home",
    image: navigationIcons.home,
    to: "/admin/home",
  },
  {
    label: "File Maintenance",
    image: navigationIcons.file,
    subnav: [
      {
        label: "Human Resource",
        subnav: [
          {
            label: "Company",
            to: "/admin/maintenance/hr/companies",
            permissionId: 100,
          },
          {
            label: "Branch",
            to: "/admin/maintenance/hr/branches",
            permissionId: 200,
          },
          {
            label: "Department",
            to: "/admin/maintenance/hr/departments",
            permissionId: 300,
          },
          {
            label: "Employee",
            to: "/admin/maintenance/hr/employees",
            permissionId: 1200,
          },
        ],
      },
      {
        label: "Payroll",
        subnav: [
          {
            label: "Government",
            subnav: [
              {
                label: "Annual Tax Table",
                to: "/admin/maintenance/payroll/government/annualtaxes",
                permissionId: 1300,
              },
              {
                label: "SSS Table",
                permissionId: 1500,
                to: "/admin/maintenance/payroll/government/sss",
              },
              {
                label: "Philhealth Table",
                permissionId: 1600,
                to: "/admin/maintenance/payroll/government/philhealth",
              },
            ],
          },
          {
            label: "Bank",
            to: "/admin/maintenance/payroll/banks",
            permissionId: 2000,
          },
          {
            label: "Deduction",
            to: "/admin/maintenance/payroll/deductions",
            permissionId: 2100,
          },
        ],
      },
    ],
  },
  {
    label: "Timekeeping",
    image: navigationIcons.timekeeping,
    subnav: [
      {
        label: "Time Entry",
        subnav: [
          {
            label: "Log Override",
            to: "/admin/timekeeping/applications/logoverride",
            permissionId: 4200,
          },
          {
            label: "Overtime",
            to: "/admin/timekeeping/applications/overtime",
            permissionId: 4300,
          },
          {
            label: "Leave",
            to: "/admin/timekeeping/applications/leave",
            permissionId: 4400,
          },
        ],
      },
      {
        label: "Processing",
        subnav: [
          {
            label: "Cut-Off Consolidation",
            to: "/admin/timekeeping/processing/consolidation",
            permissionId: 5100,
          },
        ],
      },
    ],
  },
  {
    label: "System",
    image: navigationIcons.system,
    subnav: [
      {
        label: "User",
        subnav: [
          {
            label: "Maintenance",
            to: "/admin/system/usermaintenance",
            permissionId: 7100,
          },
          {
            label: "Levels",
            to: "/admin/system/userlevels",
            permissionId: 7200,
          },
        ],
      },
      {
        label: "Reports",
        subnav: [
          {
            label: "Generate Reports",
            to: "/admin/system/reports",
            permissionId: 7300,
          },
        ],
      },
    ],
  },
];

// Sample employee routes
export const sampleEmployeeRoutes: NavRoute[] = [
  {
    label: "Home",
    image: navigationIcons.home,
    to: "/employee/home",
  },
  {
    label: "Records & Profiles",
    image: navigationIcons.file,
    subnav: [
      {
        label: "Personal Time Records",
        to: "/employee/reports/personaltimerecords",
      },
      {
        label: "Employee Time Records",
        to: "/employee/reports/employeetimerecords",
      },
      {
        label: "Payslip",
        to: "/employee/reports/payslip"
      },
      {
        label: "Personal Profile",
        to: "/employee/profile"
      },
    ],
  },
  {
    label: "Applications",
    image: navigationIcons.timekeeping,
    subnav: [
      {
        label: "Personal",
        subnav: [
          {
            label: "Log Override",
            to: "/employee/timekeeping/applications/logoverride",
          },
          {
            label: "Overtime",
            to: "/employee/timekeeping/applications/overtime",
          },
          {
            label: "Leave",
            to: "/employee/timekeeping/applications/leave",
          },
        ],
      },
      {
        label: "Approver",
        subnav: [
          {
            label: "Log Override",
            to: "/employee/approver/timekeeping/applications/logoverride",
          },
          {
            label: "Overtime",
            to: "/employee/approver/timekeeping/applications/overtime",
          },
          {
            label: "Leave",
            to: "/employee/approver/timekeeping/applications/leave",
          },
        ],
      },
    ],
  },
];

// Sample permissions (admin has all permissions)
export const sampleAdminPermissions: number[] = [
  100, 200, 300, 1200, 1300, 1500, 1600, 2000, 2100, 4200, 4300, 4400,
  5100, 7100, 7200, 7300
];

// Sample permissions for a regular employee
export const sampleEmployeePermissions: number[] = [
  4200, 4300, 4400  // Only basic time entry permissions
];