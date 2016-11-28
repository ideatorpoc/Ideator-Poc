// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  baseUrls: {
   // ideas: 'api/ideas/idea.json'
    //   ideas:'http://172.27.140.175:3000/api/ideas'
    ideas:'https://ideatorpoc-backend.herokuapp.com/api/ideas/',
    ideadAdd:'https://ideatorpoc-backend.herokuapp.com/api/ideas/create'
  }
};
