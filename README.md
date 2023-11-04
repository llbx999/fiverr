# fiverr,
}[Upl[InternetShortcut]

ollout-Dashboard is a beautiful interactive user interface for rollout gem.

It allows you to perform CRUD operations and send them to Rollout-Service (a Grape service that expose rollout gem with RESTful endpoints).
Features:

    Search field.
    Table view with action buttons
    Delete, Create, Edit actions.
    Validations, error messages and confirm message.
    New fields - author, author mail, history, last update and description.
    Security:
        You must connect via google in order to access the application.

Technology stack:

    Typescript
    React for view layer
    Redux for state management
    Webpack for bundling
    Node Express service for serving the static assets

How it works?

Rollout-Dashboard communicates with Rollout-Service via AJAX requests to perform actions on rollout gem.

On page load, we're fetching from Rollout-Service all the features.
Preview:

a 2
FAQ
How to run it?

Start it by running npm run start:dev
What's the 'history' field?

The history field is a list of the last 50 percentage changes.
Where do I get google auth credentials?

You can generate the credentials at google console.

For production environment - You'll need to place clientId in the configuration file config/app.js.

For development environment - create a file named .gauthrc in the root folder.

Place your clientId and apiKey in a json format -

{
"clientId": ""
}

I want to use Rollout-Dashboard without google auth, is it supported?

Currently this feature is not supported.

Add an issue on that and we'll refer that.





URL=https://github.com/fiverr/rollout_dashboard/blob/master/README.md#rollout-dashboard
IDList=
HotKey=0
IconFile=C:\Users\PC\AppData\Local\Mozilla\Firefox\Profiles\rmx6ijb1.default-release\shortcutCache\yklnDbmwA94Gx7gev7nKNg==.ico
IconIndex=0
oading Rollout-Dashboard.url…]()
