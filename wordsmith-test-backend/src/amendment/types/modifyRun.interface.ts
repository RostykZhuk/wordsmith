export interface IModifyRun {
  amendmentType: string;
  originalText: string;
  text: string;
  approved: boolean;
}

// {
//   "amendmentType": "modify_run",
//   "originalText": "Original run text.",
//   "text": "Modified run text.",
//   "approved": false
// }
