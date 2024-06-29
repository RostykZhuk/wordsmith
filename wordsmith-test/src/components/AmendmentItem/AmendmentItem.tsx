'use client';

import { useAmendmentSets } from '@/store/store';
import Sentence from '../Sentence/Sentence';

type Props = {
  item: any;
};

const AmendmentItem: React.FC<Props> = ({ item: { _id, amendmentType, text, approved } }) => {
  const updateOne = useAmendmentSets((state) => state.updateOne);

  const handleStatus = async () => {
    try {
      updateOne(_id, {
        amendmentType,
        approved: !approved,
      });
    } catch {}
  };

  return (
    <div
      className={`border p-5 rounded-xl ${
        approved ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <h5 className='border-b pb-4 font-medium mb-4'>Redline in document</h5>

      <div className='mb-4'>
        <p>{text}</p>
      </div>

      {approved ? (
        <button
          className='border border-red-200 rounded-xl py-2 px-4 text-red-500 hover:bg-red-200 transition'
          onClick={handleStatus}
        >
          Reject
        </button>
      ) : (
        <button
          className='border rounded-xl py-2 px-4 hover:bg-green-500 transition'
          onClick={handleStatus}
        >
          Apply changes
        </button>
      )}
    </div>
  );
};

export default AmendmentItem;
