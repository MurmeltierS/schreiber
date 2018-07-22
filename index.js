const DudenSearchApi = require( "duden-search-api" );
 
let instance = new DudenSearchApi();
 
instance.search( "Welt" ).then( ( result ) => {
    console.log( result );
} ).catch( ( error ) => {
    console.log( error );
} );