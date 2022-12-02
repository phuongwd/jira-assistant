import { isWebBuild } from "./constants/build-info";
import config from './customize';

export function getDashboardMenu(d, idx, userId) {
    if (!d) { return null; }

    const { icon, name } = d;

    return {
        name,
        id: `D-${idx}`,
        url: `/${userId}/dashboard/${idx}`,
        icon: icon,
        /*badge: {
            variant: 'info',
            text: 'NEW'
        },*/
        isDashboard: true
    };
}

const { dashboards,
    calendar, importWorklog, importIssues, planningPoker,

    // Reports
    worklogReport, worklogReportOld, sprintReport, customReport, estimateVsActual, reportBuilder,

    // Settings
    userGroups, generalSettings, advancedSettings,

    // Menu groups
    activitiesGroup = calendar || importWorklog || importIssues || planningPoker,
    reportsGroup = worklogReport || worklogReportOld || sprintReport || customReport || estimateVsActual || reportBuilder,
    settingsGroup = userGroups || generalSettings || advancedSettings
} = config.modules;

export const navigation = [
    dashboards && {
        title: true,
        name: 'Dashboards',
        isDashboard: true
    },
    dashboards && {
        name: 'Default',
        id: 'D-0',
        url: '/dashboard/0',
        icon: 'fa fa-tachometer',
        isDashboard: true
    },
    activitiesGroup && {
        title: true,
        name: 'Activities'
    },
    calendar && {
        name: 'Worklog Calendar',
        id: 'CAL',
        url: '/calendar',
        icon: 'fa fa-calendar'
    },
    importWorklog && {
        name: 'Import worklog',
        id: 'IMW',
        url: '/import/worklog',
        icon: 'fa fa-clock-o'
    },
    importIssues && {
        name: 'Import issue',
        id: 'IMI',
        url: '/import/issue',
        icon: 'fa fa-ticket',
        badge: {
            variant: 'success',
            text: 'BETA'
        }
    },
    planningPoker && {
        name: 'Poker',
        id: 'PLP',
        url: isWebBuild ? '/../poker' : '/poker',
        icon: 'fa fa-gamepad',
        badge: {
            variant: 'success',
            text: 'BETA'
        },
        attributes: { target: '_blank', rel: "noopener" }
    },
    reportsGroup && {
        title: true,
        name: 'Reports'
    },
    worklogReportOld && {
        name: 'Worklog Report',
        id: 'R-UD',
        url: '/reports/userdaywise',
        icon: 'fa fa-users'
    },
    worklogReport && {
        name: 'Worklog Report',
        id: 'R-WL',
        url: '/reports/worklog',
        icon: 'fa fa-users',
        badge: {
            variant: 'success',
            text: 'BETA'
        }
    },
    sprintReport && {
        name: 'Sprint Report',
        id: 'R-SP',
        url: '/reports/sprint',
        icon: 'fa fa-history'
    },
    customReport && {
        name: 'Custom Report',
        id: 'R-CR',
        url: '/reports/custom',
        icon: 'fa fa-table'
    },
    estimateVsActual && {
        name: 'Estimate vs Actual',
        id: 'R-EA',
        url: '/reports/estimateactual',
        icon: 'fa fa-bar-chart'
    },
    reportBuilder && {
        name: 'Report Builder',
        id: 'R-CG',
        url: '/reports/advanced',
        icon: 'fa fa-table',
        badge: {
            variant: 'success',
            text: 'BETA'
        }
    },
    settingsGroup && {
        title: true,
        name: 'Settings'
    },
    generalSettings && {
        name: 'General',
        id: 'S-GE',
        url: '/settings/general',
        icon: 'fa fa-cog'
    },
    userGroups && {
        name: 'User groups',
        id: 'S-UG',
        url: '/settings/usergroups',
        icon: 'fa fa-users'
    },
    advancedSettings && {
        name: 'Advanced',
        id: 'S-AD',
        url: '/settings/global',
        icon: 'fa fa-cogs'
    }
].filter(Boolean);

const nav = { items: navigation };

export default nav;
