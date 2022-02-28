<table><tr>
            <td style={{ width: '10%' }}><img src={x.image} style={{ width: 50, height: 50 }} alt={x.name} /></td>
            <td style={{ width: '54%' }}>{x.name}</td>
            <td style={{ width: '15%' }}>
              <input
                type="text" />
            </td>
            <td style={{ width: '15%' }}>${productoPrecio(x.qty, x.price, x._id)}</td>
          </tr>
          <tr>
            <td colspan='3'>
              <input
                placeholder="Añade un extra"
                onChange={onChangeInput}
                name={x._id}
                />
            </td>
            <td>
              <button className="fa-regular fa-trash-can"/>
            </td>
            </tr>
            </table>