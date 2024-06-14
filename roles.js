const roles = {
    superadmin: ['viewAllUsers', 'manageUsers', 'manageComments', 'viewProfile'],
    admin: ['viewAllUsers', 'manageUsers', 'manageComments', 'viewProfile'],
    user: ['viewPosts', 'viewProfile']
};

module.exports = roles;
