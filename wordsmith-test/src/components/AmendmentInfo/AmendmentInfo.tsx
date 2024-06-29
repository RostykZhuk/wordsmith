'use client';

import { useSearchParams } from 'next/navigation';
import { useAmendmentSets } from '@/store/store';
import { useEffect, useMemo } from 'react';
import AmendmentItem from '../AmendmentItem/AmendmentItem';
import { Sparkles } from 'lucide-react';

const AmendmentInfo: React.FC = () => {
  const chosenAmendment = useAmendmentSets((state) => state.chosenAmendment);
  const getOne = useAmendmentSets((state) => state.getOne);
  const searchParams = useSearchParams();

  const openAmendmentId = searchParams.get('amendmentId');

  const amendmentItems = useMemo(() => {
    if (!chosenAmendment) return [];

    return [
      ...chosenAmendment.paragraphsInsertions,
      ...chosenAmendment.runAmendments,
    ];
  }, [chosenAmendment]);

  useEffect(() => {
    if (openAmendmentId) {
      getOne(openAmendmentId);
    } else {
      getOne(null);
    }
  }, [getOne, openAmendmentId]);

  return (
    <section className='flex flex-col w-7/12 h-full'>
      {chosenAmendment && (
        <>
          <h1 className='text-3xl mb-5'>{chosenAmendment.title}</h1>
          <div className='flex items-center gap-1'>
            <Sparkles size={15} />

            <h4 className='text-lg font-semibold'>AI comment</h4>
          </div>

          <p className='text-lg mb-5 max-w-4xl text-gray-600'>
            {chosenAmendment.description}
          </p>
          <h5 className='text-lg font-semibold mb-2'>Suggestions</h5>
          <section className='w-full flex flex-col gap-5 flex-1 overflow-y-scroll py-3'>
            {amendmentItems &&
              amendmentItems.map((item: any) => (
                <AmendmentItem
                  key={item._id}
                  item={item}
                />
              ))}
          </section>
        </>
      )}
      {!chosenAmendment && (
        <h3 className='my-0 mx-auto pt-40 text-gray-400 select-none'>
          No amendment chosen
        </h3>
      )}
    </section>
  );
};

export default AmendmentInfo;
