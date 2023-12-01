import { CronJob } from 'cron'

var job = new CronJob(`* * * * * *`, async () => {
  console.log('Custom cron job running at: ', new Date())

}, null, true, 'America/Los_Angeles');

console.log('Starting cron')
job.start();
