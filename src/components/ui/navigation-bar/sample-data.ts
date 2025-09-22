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

// Complete admin routes from PayPlus
export const sampleAdminRoutes: NavRoute[] = [
  {
    label: "Home",
    image: "/icons/home.svg",
    to: "/admin/home",
  },
  {
    label: "File Maintenance",
    image: "/icons/file.svg",
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
            label: "Unit",
            to: "/admin/maintenance/hr/units",
            permissionId: 400,
          },
          {
            label: "Section",
            to: "/admin/maintenance/hr/sections",
            permissionId: 500,
          },
          {
            label: "Position",
            to: "/admin/maintenance/hr/positions",
            permissionId: 600,
          },
          {
            label: "Job/Skill Level",
            to: "/admin/maintenance/hr/skills",
            permissionId: 700,
          },
          {
            label: "Leave",
            to: "/admin/maintenance/hr/leavetypes",
            permissionId: 800,
          },
          {
            label: "Course",
            to: "/admin/maintenance/hr/courses",
            permissionId: 900,
          },
          {
            label: "Training",
            to: "/admin/maintenance/hr/trainings",
            permissionId: 1000,
          },
          {
            label: "Memo",
            to: "/admin/maintenance/hr/memos",
            permissionId: 1100,
          },
          {
            label: "Employee",
            to: "/admin/maintenance/hr/employees",
            permissionId: 1200,
          },
          {
            label: "Settings",
            subnav: [
              {
                label: "Employee Custom Tabs",
                to: "/admin/maintenance/hr/employeecustomtabs",
                permissionId: 9100,
              },
            ],
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
                label: "Withholding Tax Table",
                to: "/admin/maintenance/payroll/government/withholdingtaxes",
                permissionId: 1400,
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
              {
                label: "Pag-Ibig Table",
                permissionId: 1700,
                to: "/admin/maintenance/payroll/government/pagibig",
              },
              {
                label: "Minimum Wage Table",
                permissionId: 1800,
                to: "/admin/maintenance/payroll/government/minimumwage",
              },
              {
                label: "Information Type",
                to: "/admin/maintenance/payroll/government/informationtypes",
                permissionId: 1900,
              },
            ],
          },
          {
            label: "Bank",
            to: "/admin/maintenance/payroll/banks",
            permissionId: 2000,
          },
          {
            label: "Bonus",
            to: "/admin/maintenance/payroll/bonuses",
            permissionId: 2000,
          },
          {
            label: "Deduction",
            to: "/admin/maintenance/payroll/deductions",
            permissionId: 2100,
          },
          {
            label: "Income",
            to: "/admin/maintenance/payroll/incomes",
            permissionId: 2200,
          },
          {
            label: "Loan Type",
            to: "/admin/maintenance/payroll/loantypes",
            permissionId: 2300,
          },
          {
            label: "Overtime Rates",
            to: "/admin/maintenance/payroll/otrates",
            permissionId: 2400,
          },
          {
            label: "O.T. Meal",
            to: "/admin/maintenance/payroll/otmeals",
            permissionId: 2500,
          },
        ],
      },
      {
        label: "Timekeeping",
        subnav: [
          {
            label: "Shift",
            to: "/admin/maintenance/timekeeping/shifts",
            permissionId: 2600,
          },
          {
            label: "Holiday Group",
            to: "/admin/maintenance/timekeeping/holidaygroups",
            permissionId: 2800,
          },
          {
            label: "Holiday",
            to: "/admin/maintenance/timekeeping/holidays",
            permissionId: 2700,
          },
          {
            label: "Tardiness",
            to: "/admin/maintenance/timekeeping/tardiness",
            permissionId: 2900,
          },
          {
            label: "Approvers",
            to: "/admin/maintenance/timekeeping/approvers",
            permissionId: 3000,
          },
        ],
      },
      {
        label: "Employee Request",
        subnav: [
          {
            label: "Employee Movement",
            to: "/admin/maintenance/employeerequest/employeemovementrequests",
            permissionId: 8100,
          },
          {
            label: "Employee Rate Change",
            to: "/admin/maintenance/employeerequest/employeeratechangerequests",
            permissionId: 8400,
          },
          {
            label: "Employee Termination",
            to: "/admin/maintenance/employeerequest/employeeterminationrequests",
            permissionId: 7800,
          },
        ],
      },
      {
        label: "Others",
        subnav: [
          {
            label: "Executive",
            to: "/admin/maintenance/others/executives",
            permissionId: 3500,
          },
          {
            label: "TOIL / Offsetting",
            to: "/admin/maintenance/others/toilentitlements",
            permissionId: 3600,
          },
          { label: "Web Login", permissionId: 3700 },
          {
            label: "Department Head",
            to: "/admin/maintenance/others/departmentheads",
            permissionId: 3800,
          },
          {
            label: "Material Category",
            to: "/admin/maintenance/others/materialcategories",
            permissionId: 3900,
          },
          {
            label: "Assignment",
            to: "/admin/maintenance/others/assignments",
            permissionId: 4000,
          },
          {
            label: "Employee Assignment",
            to: "/admin/maintenance/others/employeeassignments",
            permissionId: 4100,
          },
        ],
      },
    ],
  },
  {
    label: "Timekeeping",
    image: "/icons/timekeeping.svg",
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
          {
            label: "Official Business",
            to: "/admin/timekeeping/applications/officialbusiness",
            permissionId: 4500,
          },
          {
            label: "Work From Home",
            to: "/admin/timekeeping/applications/workfromhome",
            permissionId: 4600,
          },
          {
            label: "Change Schedule",
            to: "/admin/timekeeping/applications/changeschedule",
            permissionId: 4700,
          },
          {
            label: "On Call",
            to: "/admin/timekeeping/applications/oncall",
            permissionId: 4800,
          },
        ],
      },
      {
        label: "Inquiry",
        subnav: [
          {
            label: "Daily Time Records",
            to: "/admin/timekeeping/inquiry/dailytimerecords",
            permissionId: 4900,
          },
          {
            label: "Timekeeping Ledger",
            to: "/admin/timekeeping/inquiry/timekeepingledger",
            permissionId: 5000,
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
    label: "Payroll",
    image: "/icons/payroll.svg",
    subnav: [
      {
        label: "Setup",
        subnav: [
          {
            label: "Payroll Cut-Off",
            to: "/admin/payroll/setup/payrollcutoff",
            permissionId: 5200,
          },
        ],
      },
      {
        label: "Processing",
        subnav: [
          {
            label: "Payroll Transaction",
            to: "/admin/payroll/processing/payrolltransaction",
            permissionId: 5400,
          },
          {
            label: "Payslip Generation",
            to: "/admin/payroll/processing/payslipgeneration",
            permissionId: 5400,
          },
          {
            label: "PAYPlus Express",
            to: "/admin/payroll/processing/payplusexpress",
            permissionId: 8700,
          },
        ],
      },
      {
        label: "Other Computation",
        subnav: [
          {
            label: "Alphalist",
            to: "/admin/payroll/othercomputation/alphalist",
            permissionId: 5900,
          },
        ],
      },
      {
        label: "Closing",
        subnav: [
          {
            label: "Payroll Posting",
            permissionId: 6000,
            to: "/admin/payroll/closing/payrollposting",
          },
        ],
      },
      {
        label: "Reports",
        subnav: [
          {
            label: "View Payslip",
            to: "/admin/payroll/reports/payslip",
            permissionId: 6300,
          },
          {
            label: "2316",
            to: "/admin/payroll/reports/2316",
            permissionId: 6400,
          },
          {
            label: "Bank Remittance",
            to: "/admin/payroll/reports/bankremittance",
          },
        ],
      },
    ],
  },
  {
    label: "System",
    image: "/icons/system.svg",
    subnav: [
      {
        label: "Notifications",
        to: "/admin/notifications/notificationrequest",
        permissionId: 89001111,
      },
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
      {
        label: "Data Upload",
        to: "/admin/system/dataupload",
        permissionId: 7500,
      },
      {
        label: "Configuration",
        subnav: [
          {
            label: "Company",
            to: "/admin/configuration/company",
            permissionId: 7700,
          },
        ],
      },
    ],
  },
];

// Complete employee routes from PayPlus
export const sampleEmployeeRoutes: NavRoute[] = [
  {
    label: "Home",
    image: "/icons/home.svg",
    to: "/employee/home",
  },
  {
    label: "Records & Profiles",
    image: "/icons/assets.svg",
    subnav: [
      {
        label: "Personal Time Records",
        to: "/employee/reports/personaltimerecords",
      },
      {
        label: "Employee Time Records",
        to: "/employee/reports/employeetimerecords",
      },
      { label: "Payslip", to: "/employee/reports/payslip" },
      { label: "BIR 2316", to: "/employee/reports/2316" },
      { label: "Personal Profile", to: "/employee/profile" },
      { label: "Employee Profile", to: "/employee/profile/findemployee" },
    ],
  },
  {
    label: "Applications",
    image: "/icons/timekeeping.svg",
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
          {
            label: "Official Business",
            to: "/employee/timekeeping/applications/officialbusiness",
          },
          {
            label: "Work From Home",
            to: "/employee/timekeeping/applications/workfromhome",
          },
          {
            label: "Change Schedule",
            to: "/employee/timekeeping/applications/changeschedule",
          },
          {
            label: "On Call",
            to: "/employee/timekeeping/applications/oncall",
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
          {
            label: "Official Business",
            to: "/employee/approver/timekeeping/applications/officialbusiness",
          },
          {
            label: "Work From Home",
            to: "/employee/approver/timekeeping/applications/workfromhome",
          },
          {
            label: "Change Schedule",
            to: "/employee/approver/timekeeping/applications/changeschedule",
          },
          {
            label: "On Call",
            to: "/employee/approver/timekeeping/applications/oncall",
          },
        ],
      },
    ],
  },
];

// Sample permissions (admin has all permissions from PayPlus)
export const sampleAdminPermissions: number[] = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600,
  2700, 2800, 2900, 3000, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200,
  4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000, 5100, 5200, 5400, 5900,
  6000, 6300, 6400, 7100, 7200, 7300, 7500, 7700, 7800, 8100, 8400, 8700,
  9100, 89001111
];

// Sample permissions for a regular employee (basic time entry and reports)
export const sampleEmployeePermissions: number[] = [
  4200, 4300, 4400, 4500, 4600, 4700, 4800  // Time entry permissions
];