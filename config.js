// Backend endpoints. To move hosts: point API at any PostgREST-compatible /rpc/ base URL.
// AUTH is only needed for Neon's Data API (issues the anonymous JWT). Leave '' for Supabase and set KEY to its anon key.
window.VOO={
  API:'https://ep-old-bar-bgs2qeav.apirest.c-9.eu-central-1.aws.neon.tech/neondb/rest/v1/rpc/',
  AUTH:'https://ep-old-bar-bgs2qeav.neonauth.c-9.eu-central-1.aws.neon.tech/neondb/auth',
  KEY:''
};
