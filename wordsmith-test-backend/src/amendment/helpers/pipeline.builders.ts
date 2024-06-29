import { Types } from 'mongoose';

export const findAmendmentSet = (searchId: Types.ObjectId): any => [
  {
    $match: {
      $or: [
        { 'runAmendments._id': searchId },
        { 'paragraphsInsertions._id': searchId },
      ],
    },
  },
  {
    $project: {
      _id: 1,
      title: 1,
      description: 1,
      chosenAmendment: {
        $concatArrays: [
          {
            $filter: {
              input: '$runAmendments',
              as: 'runAmendment',
              cond: { $eq: ['$$runAmendment._id', searchId] },
            },
          },
          {
            $filter: {
              input: '$paragraphsInsertions',
              as: 'paragraphInsertion',
              cond: { $eq: ['$$paragraphInsertion._id', searchId] },
            },
          },
        ],
      },
      approved: 1,
    },
  },
  {
    $project: {
      chosenAmendment: { $arrayElemAt: ['$chosenAmendment', 0] },
    },
  },
  {
    $replaceRoot: { newRoot: '$chosenAmendment' },
  },
];
