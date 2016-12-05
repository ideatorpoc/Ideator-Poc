// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  baseUrls: {
    // ideas:'http://172.27.140.186:3000/api/ideas/',
    // ideadAdd:'http://172.27.140.186:3000/api/ideas/create',
    // login:'http://172.27.140.186:3000/api/sign_in',
    // logout:'http://172.27.140.186:3000/api/sign_out'
    // ideas: 'api/ideas/idea.json'
    ideas:'https://ideatorpoc-backend.herokuapp.com/api/ideas/',
    ideadAdd:'https://ideatorpoc-backend.herokuapp.com/api/ideas/',
    login:'https://ideatorpoc-backend.herokuapp.com/api/sign_in',
    logout:'https://ideatorpoc-backend.herokuapp.com/api/sign_out'
  }
};
