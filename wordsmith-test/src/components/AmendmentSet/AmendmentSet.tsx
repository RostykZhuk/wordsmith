'use client';

import { IAmendmentSet } from '@/types/amendmentSet.interface';
import AmendmentStatus from '../AmendmentStatus/AmendmentStatus';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAmendmentSets } from '@/store/store';

type Props = {
  amendmentSet: IAmendmentSet;
  status: string;
};

const AmendmentSet: React.FC<Props> = ({
  status,
  amendmentSet: { _id, title, approved },
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const updateOne = useAmendmentSets((state) => state.updateOne);

  const isChosen = searchParams.get('amendmentId') === _id;

  const handleNavigation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (isChosen) {
      router.push(pathname, { scroll: false });

      return;
    }

    router.push(`?amendmentId=${_id}`, { scroll: false });
  };

  const handleStatus = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      updateOne(_id, {
        approved: !approved,
      });
    } catch {}
  };

  return (
    <div
      className={`border rounded-xl cursor-pointer ${
        approved ? 'bg-green-100' : 'bg-white'
      } `}
      onClick={(e) => handleNavigation(e)}
    >
      <div className='flex flex-col gap-2 p-5'>
        <AmendmentStatus status={status} />
        <h3 className='font-medium'>{title}</h3>
        <p className='text-purple-800 font-semibold'>See more ^</p>
      </div>

      <div className='flex justify-end border-t pt-4 font-medium p-5'>
        {approved ? (
          <button
            className='border border-red-200 rounded-xl py-2 px-4 text-red-500 hover:bg-red-200 transition'
            onClick={(e) => handleStatus(e)}
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
    </div>
  );
};

export default AmendmentSet;
