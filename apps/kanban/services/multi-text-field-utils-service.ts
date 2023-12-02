import { MultiTextFieldItemValue } from '../components';

export class MultiTextFieldUtilsService {
  static getRemainingIds(
    originalIds: number[],
    input: MultiTextFieldItemValue[],
  ) {
    const inputIds = input.map(({ id }) => id);

    return originalIds
      .map(String)
      .reduce<string[]>(
        (prev, cur) => (inputIds.includes(cur) ? [...prev, cur] : prev),
        [],
      )
      .map(Number);
  }

  static getIdsToDelete(originalIds: number[], remainingIds: number[]) {
    return originalIds.filter((id) => !remainingIds.includes(id));
  }

  static getNewItems(remainingIds: number[], input: MultiTextFieldItemValue[]) {
    return input.reduce<string[]>(
      (prev, { id, value }) =>
        !remainingIds.map(String).includes(id) ? [...prev, value] : prev,
      [],
    );
  }
}
