/**
 * 
 */
Ext.define('CN.overrides.app.BaseController', {

	override: 'Ext.app.BaseController',

	redirectTo(token, force) {

		const currentToken = Ext.util.History.getHash();

		if (/^\.\/.*/.test(token)) {
			const tailToken = token.split('./')[1],
				re = new RegExp(`${tailToken}$`);



			// const re = new RegExp(`${currentToken}$`),
			// 	tailToken = token.split('./')[1];

			if (re.test(currentToken)) {
				return this.callParent([currentToken, force]);
			} else {
				return this.callParent([`${currentToken}/${tailToken}`, force]);
			}

			console.log(22, token, currentToken);



		} else {

		}

		// debugger

		// if (!INRIGHTS.util.routing.UrlRightsManager.hasAccessToUrl(token)) {
		// // 	return false;
		// // }

		// //принудительный переход - не запрашиваем активный контроллер
		// if (force) {
		// 	return this.callParent(arguments);
		// }

		// //запрашиваем активный контроллер
		// var allowRedirect = Ext.GlobalEvents.fireEvent('beforeredirect', token);

		// if (allowRedirect) {
		// 	return this.callParent(arguments);
		// } else {
		// 	return false;
		// }

	}
});
