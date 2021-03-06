<img src="https://i.imgur.com/Uus5ME9.png" alt="A merge between React and Node Logos with a checkmark at its center" width="40%" align="right">

# Tada! To-Do
A to-do list focused on simplicity using React and Node.

## Try it yourself
*I'm using vercel's serveless deployment, if the link is down should be up quickly. In the meantime you can clone the git repo and follow directions below to run it.*

[404]: https://tada-todo.vercel.app/notfound
[app]: https://tada-todo-2gyva8quf-zelaznogydna.vercel.app/tada-todo

Here's the [app]<br>
and a funny [404] for the app :)

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Running it with Docker

In the project directory, you can build the app:
```Docker
docker build -t tada-todo:latest .
```

And then running it in your local machine:
```Docker
docker run -p 3000:80 tada-todo:latest
```

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
