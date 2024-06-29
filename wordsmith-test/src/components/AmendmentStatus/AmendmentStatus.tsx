'use client';

import { statuses } from './constants';

type Props = {
  status: string;
};

const AmendmentStatus: React.FC<Props> = ({ status }) => {
  const statusClass = statuses[status];

  return (
    <div
      className={`border py-1 px-2 rounded-md text-sm ${statusClass?.color} ${statusClass?.bg} ${statusClass?.border} max-w-max`}
    >
      {status}
    </div>
  );
};

export default AmendmentStatus;
