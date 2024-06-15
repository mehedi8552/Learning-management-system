const roles = {
    superadmin: ['viewAllUsers', 'manageUsers', 'manageComments', 'viewProfile','createPost','viewPosts'],
    admin: ['viewAllUsers', 'manageUsers', 'manageComments', 'viewProfile','createPost','viewPosts'],
    user: ['viewPosts', 'viewProfile']
};

module.exports = roles;


