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

			if (re.test(currentToken)) {
				return this.callParent([currentToken, force]);
			} else {
				return this.callParent([`${currentToken}/${tailToken}`, force]);
			}

		} else {
			return this.callParent(arguments);
		}

	}
});
