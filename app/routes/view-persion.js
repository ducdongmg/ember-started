import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return [
			{id : 1, name : 'Marie Curie', info: 'she is ...'},
			{id : 2, name : 'Mae Jemison', info: 'he is ...'}, 
			{id : 3, name : 'Albert Hofmann', info: 'he is ...'}
		].findBy('id', params.person);
	}
});
