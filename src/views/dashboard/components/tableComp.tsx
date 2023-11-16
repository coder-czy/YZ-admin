import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
	key: string;
	name: string;
	num: number;
	desc: string;
	tags: string[];
}

const columns: ColumnsType<DataType> = [
	{
		title: "商品名称",
		dataIndex: "name",
		key: "name",
		render: text => <a>{text}</a>
	},
	{
		title: "商品数量",
		dataIndex: "num",
		key: "num"
	},
	{
		title: "商品描述",
		dataIndex: "desc",
		key: "desc"
	},
	{
		title: "商品类别",
		key: "tags",
		dataIndex: "tags",
		render: (tags: string[]) => (
			<span>
				{tags.map(tag => {
					// let color = tag.length > 5 ? "geekblue" : "green";
					// if (tag === "loser") {
					// 	color = "volcano";
					// }
					return (
						<Tag color="processing" key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: "操作",
		key: "action",
		render: () => (
			<Space size="middle">
				<a>查看详情</a>
			</Space>
		)
	}
];

const data: DataType[] = [
	{
		key: "1",
		name: "商品A",
		num: 32,
		desc: "商品A的描述",
		tags: ["电器", "日常用品"]
	},
	{
		key: "2",
		name: "商品B",
		num: 42,
		desc: "商品的描述",
		tags: ["纸质用品"]
	},
	{
		key: "3",
		name: "商品C",
		num: 32,
		desc: "商品C的描述",
		tags: ["食品", "肉类"]
	},
	{
		key: "4",
		name: "商品D",
		num: 36,
		desc: "商品D的描述",
		tags: ["玩具"]
	},
	{
		key: "5",
		name: "商品E",
		num: 58,
		desc: "商品E的描述",
		tags: ["服装", "鞋类"]
	},
	{
		key: "6",
		name: "商品F",
		num: 45,
		desc: "商品F的描述",
		tags: ["交通工具"]
	}
];

function TableComp() {
	return (
		<div>
			<Table columns={columns} pagination={false} dataSource={data} />
		</div>
	);
}

export default TableComp;
