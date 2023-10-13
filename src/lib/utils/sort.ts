import { propAccessor, type PropAccessorArg } from './object';

export function createSortFunc(value?: PropAccessorArg, direction: 'asc' | 'desc' = 'asc') {
  const sortDirection = direction === 'asc' ? 1 : -1;

  return (a: any, b: any) => {
    const valueFn = propAccessor(value);
    const aValue = valueFn(a);
    const bValue = valueFn(b);

    if (aValue == null || bValue == null) {
      if (aValue == null && bValue != null) {
        return -sortDirection;
      } else if (aValue != null && bValue == null) {
        return sortDirection;
      } else {
        // both `null`
        return 0;
      }
    }

    return aValue < bValue ? -sortDirection : aValue > bValue ? sortDirection : 0;
  };
}

export function createCompoundSort(...sortFns: { (a: any, b: any): any }[]) {
  return (a: any, b: any) => {
    let result = 0;
    for (let i = 0; i < sortFns.length; i++) {
      let result = sortFns[i](a, b);
      if (result != 0) {
        return result;
      }
    }
    return 0;
  };
}

export function nestedSort(
  data: Array<{ values?: object[] }>,
  sortFunc: (a: object, b: object, depth: number) => number,
  depth = 0
) {
  data.sort((a, b) => sortFunc(a, b, depth));
  data.forEach((d) => {
    if (d.values) {
      nestedSort(d.values, sortFunc, depth + 1);
    }
  });

  return data;
}

export function sort<T = any>(
  arr: Array<T>,
  prop?: PropAccessorArg,
  direction: 'asc' | 'desc' = 'asc'
) {
  return arr.sort(createSortFunc(prop, direction));
}
