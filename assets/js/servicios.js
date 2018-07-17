
app.service('Trabajador', function() {

    this.crear = trabajador => axios.post('/data/trabajador', trabajador)
    this.obtener = () => axios('/data/trabajador')
    this.one = id => axios('/data/trabajador/' + id)
    this.editar = trabajador => axios.put('/data/trabajador/' + trabajador.id, trabajador)
    this.eliminar = id => axios.delete('/data/trabajador/' + id)
    this.paginacion = function(items, pagina) { return axios('/data/trabajador/paginacion/' + items + '/' + pagina ) }

    

});

app.service('Imagen', function() {

    this.crear = imagen => axios.post('/data/imagen', imagen)
    this.obtener = () => axios('/data/imagen')
    this.one = id => axios('/data/imagen/' + id)
    this.editar = imagen => axios.put('/data/imagen/' + imagen.id, imagen)
    this.eliminar = id => axios.delete('/data/imagen/' + id)
    

});

app.service('Subservicio', function() {

    this.crear = subservicio => axios.post('/data/subservicio', subservicio)
    this.obtener = () => axios('/data/subservicio')
    this.one = id => axios('/data/subservicio/' + id)
    this.editar = subservicio => axios.put('/data/subservicio/' + subservicio.id, subservicio)
    this.eliminar = id => axios.delete('/data/subservicio/' + id)
    this.paginacion = function(items, pagina) { return axios('/data/subservicio/paginacion/' + items + '/' + pagina ) }
    

});

app.service('Servicio', function() {

    this.crear = servicio => axios.post('/data/servicio', servicio)
    this.obtener = () => axios('/data/servicio')
    this.one = id => axios('/data/servicio/' + id)
    this.editar = servicio => axios.put('/data/servicio/' + servicio.id, servicio)
    this.eliminar = id => axios.delete('/data/servicio/' + id)
    this.paginacion = function(items, pagina) { return axios('/data/servicio/paginacion/' + items + '/' + pagina ) }
    this.agregarSub = subservicio => axios.put('/data/servicio/subservicios/'+ subservicio.id, subservicio)
    this.obtenerSub = idServicio => axios('/data/servicio/obtenerSub/' + idServicio)

});

app.service('Proyecto', function() {

    this.crear = proyecto => axios.post('/data/proyecto', proyecto)
    this.obtener = () => axios('/data/proyecto')
    this.one = id => axios('/data/proyecto/' + id)
    this.editar = proyecto => axios.put('/data/proyecto/' + proyecto.id, proyecto)
    this.eliminar = id => axios.delete('/data/proyecto/' + id)
    this.paginacion = function(items, pagina) { return axios('/data/proyecto/paginacion/' + items + '/' + pagina ) }

});
