export const statuses: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  'Major issue': {
    color: 'text-red-800',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
  'Minor issue': {
    color: 'text-yellow-800',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  Approved: {
    color: 'text-green-800',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  'In progress': {
    color: 'text-blue-800',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  'Pending review': {
    color: 'text-purple-800',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
};
