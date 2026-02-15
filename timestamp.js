#!/usr/bin/env node
/** Timestamp converter */
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: timestamp.js <ts>');process.exit(1);}
const v=a[0];
if(a.includes('--to-ts')){console.log(Math.floor(new Date(v).getTime()/1000));}
else{console.log(new Date(parseInt(v)*1000).toISOString());}
