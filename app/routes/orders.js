import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{id : 1, name : 'Marie Curie'},
			{id : 2, name : 'Mae Jemison'}, 
			{id : 3, name : 'Albert Hofmann'}
		];
	}
});
