import React from 'react';

export default function table({ i, n, s, e }) {
  return (
    <tbody className='lh-copy'>
      <tr className='stripe-dark'>
        <td className='pa3'>{i}</td>
        <td className='pa3'>{n}</td>
        <td className='pa3'>{s}</td>
        <td className='pa3'>{e}</td>
      </tr>
    </tbody>
  );
}
