import JSON5 from 'json5';
import postData from './application-data';

const PostData = () => {
  let pd = localStorage.getItem('postData');
  if (!pd) {
    let data = JSON.stringify(postData);
    pd = JSON.parse(data);
    console.log('reread pd:', pd)
    localStorage.setItem('postData', data);
  }
  else {
      pd = JSON.parse(pd)
  }
  console.log('pd:', pd)
  return pd;
};
export const SetPostData = pd => {
  localStorage.setItem('postData', JSON.stringify(pd));
};
export default PostData;
