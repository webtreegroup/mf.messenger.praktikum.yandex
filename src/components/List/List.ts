import { Block } from 'core/block'
import { IList } from './List.types'
import { Link } from '../Link/Link'

export class List extends Block<HTMLUListElement> {
    constructor(props: IList) {
        const mappedLinks = props.list?.map((route) => {
            const link = new Link(route)

            const result = new Block('li', {}, { root: [link] })

            return result
        })

        super(
            'ul',
            props,
            { root: mappedLinks },
        )
    }
}
