import req from '@/network'

class ODataClinet{
  async get(object_name, _id, space_id, query_options) {
    const url = '/api/odata/v4/' + space_id + '/' + object_name + '/' + _id;
    const result = await req.get(url, query_options).catch((err)=>{
      console.log("error...",err.data)
      return {}
    })
    return result
  }

  async query(object_name, query_options, space_id) {
    const url = '/api/odata/v4/' + space_id + '/' + object_name;
    const result = await req.get(url, query_options).catch((err)=>{
      console.log("error...",err.data)
      return {}
    })
    return result
  }

  async insert(object_name,data, space_id) {
    const url = '/api/odata/v4/' + space_id + '/' + object_name;
    const result = await req.post(url, data).catch((err)=>{
      console.log("error...",err.data)
      return false
    })
    return result
  }

  async update(object_name, _id, data, space_id) {
    const url = '/api/odata/v4/' + space_id + '/' + object_name + '/'+_id;
    var doc = {}
    doc['$set'] = data
    const result = await req.put(url, doc).catch((err)=>{
      console.log("error...",err.data)
      return false
    })
    return result
  }

  async delete(object_name, _id, space_id) {
    const url = '/api/odata/v4/' + space_id + '/' + object_name + '/'+_id;
    const result = await req.delete(url).catch((err)=>{
      console.log("error...",err.data)
      return false
    })
    return result
  }
}

export default new ODataClinet()
