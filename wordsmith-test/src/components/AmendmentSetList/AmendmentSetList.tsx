'use client';

import AmendmentSet from '@/components/AmendmentSet/AmendmentSet';
import { useAmendmentSets } from '@/store/store';
import { useEffect } from 'react';

const AmendmentSetList = () => {
  const amendmentSets = useAmendmentSets((state) => state.amendmentSets);
  const getAmendmentSets = useAmendmentSets((state) => state.getAmendments);

  useEffect(() => {
    getAmendmentSets();
  }, []);

  const areThereAvailableAmendments = amendmentSets.length !== 0;

  return (
    <>
      {areThereAvailableAmendments && (
        <section className='w-full flex flex-col gap-5 flex-1 overflow-y-scroll py-3'>
          {amendmentSets.map((amSet) => (
            <AmendmentSet
              status={'Major issue'}
              amendmentSet={amSet}
              key={amSet._id}
            />
          ))}
        </section>
      )}
      {!areThereAvailableAmendments && (
        <h3 className='my-0 mx-auto pt-40 text-gray-400 select-none'>
          There are no available amendments
        </h3>
      )}
    </>
  );
};

export default AmendmentSetList;
