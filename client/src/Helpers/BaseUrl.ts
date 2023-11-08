export const develop : string = 'http://web-server.default.svc.cluster.local:5000';

const production : string = 'http://eye.vprofile.cloudradar.online';

const baseurl : string =   production;


export const server = process.env.NEXT_PUBLIC_SERVER || 'http://192.168.33.10:5000' 

export default baseurl;