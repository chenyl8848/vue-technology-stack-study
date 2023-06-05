// 引入 mitt mitt 是一个方法，方法执行会返回 bus 对象
import mitt from 'mitt';

const $bus = mitt();

export default $bus;