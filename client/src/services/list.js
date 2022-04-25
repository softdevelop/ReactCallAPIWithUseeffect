const domain = 'http://localhost:3333/';

export function getList() {
  return fetch(domain+'list')
    .then(data => data.json())
}

export function setItem(item) {
 return fetch(domain+'list', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ item })
 })
   .then(data => data.json())
}

export function deleteItem(id) {
 return fetch(domain+'list/'+id, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json'
   }
 })
   .then(data => data.json())
}

export function updateItem(id, item) {
 return fetch(domain+'list/'+id, {
   method: 'PUT',
   //method: 'PATCH',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ item })
 })
   .then(data => data.json())
}
