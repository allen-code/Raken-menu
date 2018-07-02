export class AppConfig {
    static APP_NAME = 'Raken'
    static APP_MENU_ITEMS = [
        { name: 'DASHBOARD', link: '/dashboard' },
        { name: 'PROJECTS', link: '/projects' },
        { name: 'TEAM', link: '/team' },
        { name: 'COMPANY', link: '/company' }
    ]
    static APP_DEFAULT_PROFILE_MENU_ITEMS = [
        { name: 'MY PROFILE', link: '/profile' },
        { name: 'MY PROJECTS', link: '/myprojects', notification_number: 23 },
        { name: 'NOTIFICATIONS', link: '/notifications', notification_number: 23 },
        { name: 'TASKS', link: '/tasks', notification_number: 23 },
        { name: 'HELP', link: '/help' },
        { name: 'LOGOUT', link: 'logout' }
    ]
}