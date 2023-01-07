//	@ts-nocheck
import _create from 'lodash/create';
import { create } from '../../src/object';

function Shape() {
	this.x = 0;
	this.y = 0;
}

function Circle() {
	Shape.call(this);
}

function _Circle() {
	Shape.call(this);
}

const circle = new (Circle as any)();
const _circle = new (_Circle as any)();

describe('Object', () => {
	describe('create', () => {
		Circle.prototype = create(Shape.prototype, {
			constructor: Circle,
		});

		_Circle.prototype = _create(Shape.prototype, {
			constructor: _Circle,
		});

		it("create(Shape.prototype, { 'constructor': Circle })", () => {
			expect(circle instanceof Circle).toEqual(_circle instanceof _Circle);
		});

		it("create(Shape.prototype, { 'constructor': Circle })", () => {
			expect(circle instanceof Shape).toEqual(_circle instanceof Shape);
		});
	});
});
