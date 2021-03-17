import { OrderPDF, User } from '../types';
import moment from 'moment';
import 'moment/locale/ja';

export default (
  item: OrderPDF[],
  user: User | null,
  stampCurator: string | undefined | null,
  stampCompany: string | undefined | null,
  width: number,
  height: number,
): string => {
  let html = '';
  // if (item.length <= 2) {
  //   html = renderHtml(item, user);
  // } else {
  //   let current = 0;
  //   for (let index = 0; index < item.length / 2; index++) {
  //     html += renderHtml(item.slice(current, current + 2), user);
  //     current += 2;
  //   }
  // }
  item.map((value) => {
    html += renderHtml(value, user, stampCurator, stampCompany);
  });

  return `<body>
   
  ${html}
  </body>`;
};

// const renderDetail = (data: any): string => {
//   let detail = '';
//   data.map((item: any) => {
//     detail += `<tr>
//       <td></td>
//       <td class="item-name"><p>${item.name}</p></td>
//       <td class="td-amount"></td>
//       <td class="td-price"></td>
//       <td class="td-total"></td>
//       </tr>`;
//   });
//   return detail;
// };

const renderTdEmpty = (length: number): string => {
  let str = '';
  for (let index = 0; index < length; index++) {
    str += `<tr class="tr-empty">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>`;
  }
  return str;
};

type Item = {
  id: string;
  metadata: string;
  amount: string;
  meterialPrice: string;
  totalPrice: string;
};

const renderNote = (note: string) => {
  if (!note) {
    return;
  }
  const convertToJS = JSON.parse(note);
  let str = '';
  convertToJS.map((item: Item) => {
    str += `
    <tr>
      <td>${item.id}</td>
      <td>${item.metadata}</td>
      <td>${item.amount}</td>
      <td>${item.meterialPrice}</td>
      <td>${item.totalPrice}</td>
    </tr>
    `;
  });
  return str;
};

const totalItemPrice = (note: string, orderTotalPrice: number): number => {
  let result = 0;
  if (!note) {
    return orderTotalPrice;
  }
  const convertToJS = JSON.parse(note);
  const total = convertToJS.reduce((accumulator: Item, currentValue: Item) => accumulator + currentValue.totalPrice, 0);
  result = +total + orderTotalPrice;
  return result;
};

const formatMoney = (money: number): string => {
  const str = money.toString();
  return str
    .split('')
    .reverse()
    .reduce((acc: string, cur: string, i: number) => {
      return acc + (!(i % 3) ? ',' + cur : cur);
    })
    .split('')
    .reverse()
    .join('');
};

const renderHtml = (
  item: OrderPDF,
  user: User | null,
  stampCurator: string | undefined | null,
  stampCompany: string | undefined | null,
): string => {
  // let renderDataTable = '';
  const totalPrice = item.meterialPrice && item.amount ? (+item.meterialPrice + +item.processingFee) * +item.amount : 0;
  const vat = 0;
  // item.map((value: OrderPDF) => {
  //   totalPrice += +value.meterialPrice * value.amount;
  //   renderDataTable += `<tr>
  //   <td>${value.id}</td>
  //   <td class="item-name">${value.metadata}</td>
  //   <td class="td-amount">${formatMoney(value.amount)}</td>
  //   <td class="td-price">${formatMoney(+value.meterialPrice)}</td>
  //   <td class="td-total">${formatMoney(+value.meterialPrice * value.amount)}</td>
  //   </tr>
  //   `;
  // });
  return `
   
`;
};
