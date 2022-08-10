import { processes } from 'systeminformation';

const data = await processes();
const myProc = data.list.filter(p => p.pid === process.pid);

console.log(myProc);
