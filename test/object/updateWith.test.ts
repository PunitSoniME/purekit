import _updateWith from 'lodash/updateWith';
import _constant from 'lodash/constant';
import { updateWith } from '../../src/object';
import constant from '../../src/util/constant';

let object: any = {};
let _object: any = {};

describe('Object', () => {
	describe('updateWith', () => {
		it("updateWith(object, '[0][1]', constant('a'), Object)", () => {
			expect(updateWith(object, '[0][1]', constant('a'), Object)).toEqual(
				_updateWith(_object, '[0][1]', _constant('a'), Object)
			);
		});
	});
});
