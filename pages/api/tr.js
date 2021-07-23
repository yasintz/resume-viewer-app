import fetch from 'node-fetch';

const pdfBuffer = fetch(
  'https://github.com/yasintz/resume-viewer-app/files/6870459/Resume.v2.pdf'
).then((r) => r.buffer());

export default async function handler(req, res) {
  res.setHeader('Content-type', 'application/pdf');

  res.send(await pdfBuffer);
}
