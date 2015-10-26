// Iron-Router
Router.configure({
    layoutTemplate: 'main' // master layout
});

// On load - prompts user to select Corp or Runner ID
Router.route('selectID', {path: '/'});