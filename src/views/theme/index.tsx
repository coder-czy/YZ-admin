import { EllipsisOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import type { RadioChangeEvent, TourProps, UploadFile } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
import {
	Upload,
	Tour,
	Input,
	Form,
	QRCode,
	Button,
	Calendar,
	DatePicker,
	Modal,
	Pagination,
	Popconfirm,
	Radio,
	Select,
	Space,
	Table,
	theme,
	TimePicker,
	Transfer,
	Image,
	InputNumber,
	Divider,
	ColorPicker,
	Card
} from "antd";

import { useDispatch, useSelector } from "@/store";
import { setTheme, setComponentSize, setLanguage } from "@/store/module/global";

const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
	{
		title: "Name",
		dataIndex: "name",
		filters: [{ text: "filter1", value: "filter1" }]
	},
	{
		title: "Age",
		dataIndex: "age"
	}
];

const Page: React.FC = () => {
	const { token } = theme.useToken();

	const [open, setOpen] = useState(false);
	const [tourOpen, setTourOpen] = useState(false);
	const tourRefs = React.useRef<HTMLElement[]>([]);

	const showModal = () => {
		setOpen(true);
	};

	const hideModal = () => {
		setOpen(false);
	};

	const info = () => {
		Modal.info({
			title: "some info",
			content: "some info"
		});
	};

	const confirm = () => {
		Modal.confirm({
			title: "some info",
			content: "some info"
		});
	};

	const steps: TourProps["steps"] = [
		{
			title: "Upload File",
			description: "Put your files here.",
			target: () => tourRefs.current[0]
		},
		{
			title: "Save",
			description: "Save your changes.",
			target: () => tourRefs.current[1]
		},
		{
			title: "Other Actions",
			description: "Click to see other actions.",
			target: () => tourRefs.current[2]
		}
	];

	const fileList: UploadFile[] = [
		{
			uid: "-1",
			name: "image.png",
			status: "done",
			url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
		},
		{
			uid: "-2",
			percent: 50,
			name: "image.png",
			status: "uploading",
			url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
		},
		{
			uid: "-3",
			name: "image.png",
			status: "error"
		}
	];

	return (
		<Space
			direction="vertical"
			size={[0, 16]}
			style={{ width: "100%", paddingTop: 16, borderTop: `1px solid ${token.colorBorder}` }}
		>
			<Pagination defaultCurrent={1} total={50} showSizeChanger />
			<Space wrap>
				<Select showSearch style={{ width: 200 }}>
					<Option value="jack">jack</Option>
					<Option value="lucy">lucy</Option>
				</Select>
				<DatePicker />
				<TimePicker />
				<RangePicker />
			</Space>
			<Space wrap>
				<Button type="primary" onClick={showModal}>
					Show Modal
				</Button>
				<Button onClick={info}>Show info</Button>
				<Button onClick={confirm}>Show confirm</Button>
				<Popconfirm title="Question?">
					<a href="#">Click to confirm</a>
				</Popconfirm>
			</Space>
			<Transfer dataSource={[]} showSearch targetKeys={[]} />
			<div style={{ width: 320, border: `1px solid ${token.colorBorder}`, borderRadius: 8 }}>
				<Calendar fullscreen={false} value={dayjs()} />
			</div>
			<Form name="basic" autoComplete="off" labelCol={{ sm: { span: 4 } }} wrapperCol={{ span: 6 }}>
				<Form.Item label="Username" name="username" rules={[{ required: true }]}>
					<Input width={200} />
				</Form.Item>
				<Form.Item label="Age" name="age" rules={[{ type: "number", min: 0, max: 99 }]} initialValue={100}>
					<InputNumber width={200} />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 2, span: 6 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
			<Table dataSource={[]} columns={columns} />
			<Modal title="Locale Modal" open={open} onCancel={hideModal}>
				<p>Locale Modal</p>
			</Modal>
			<Space wrap size={80}>
				<QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log("refresh")} />
				<Image width={160} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
			</Space>
			<Upload listType="picture-card" fileList={fileList} />
			<Divider orientation="left">Tour</Divider>
			<Button type="primary" onClick={() => setTourOpen(true)}>
				Begin Tour
			</Button>
			<Space>
				<Button ref={node => node && tourRefs.current.splice(0, 0, node)}> Upload</Button>
				<Button ref={node => node && tourRefs.current.splice(1, 0, node)} type="primary">
					Save
				</Button>
				<Button ref={node => node && tourRefs.current.splice(2, 0, node)} icon={<EllipsisOutlined />} />
			</Space>
			<Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
		</Space>
	);
};

const Theme: React.FC = () => {
	const dispatch = useDispatch();
	const { componentSize, language } = useSelector(state => state.global);
	// 组件尺寸
	const [compSize, setCompSize] = useState(componentSize);
	const sizeHandle = (e: RadioChangeEvent) => {
		dispatch(setComponentSize(e.target.value));
		setCompSize(e.target.value);
	};

	// 修改主题
	const { token } = theme.useToken();
	const [themeVal, setColorHex] = useState<Color | string>(token.colorPrimary);
	const [formatHex, setFormatHex] = useState<ColorPickerProps["format"]>("hex");
	const hexString = useMemo(() => (typeof themeVal === "string" ? themeVal : themeVal.toHexString()), [themeVal]);
	useEffect(() => {
		dispatch(setTheme(hexString));
	}, [themeVal]);

	// 国际化
	dayjs.locale(language);
	const [locale, setLocale] = useState(language);
	const changeLocale = (e: RadioChangeEvent) => {
		const localeValue = e.target.value;
		console.log(localeValue);
		setLocale(localeValue);
		dayjs.locale(localeValue);
		dispatch(setLanguage(localeValue));
	};

	return (
		<Card bordered={false}>
			<div style={{ marginBottom: 16 }}>
				{/* 国际化配置 */}
				<Divider>国际化配置</Divider>
				<Radio.Group value={locale} onChange={changeLocale}>
					<Radio.Button key="en" value={"en"}>
						English
					</Radio.Button>
					<Radio.Button key="zh-cn" value={"zh-cn"}>
						中文
					</Radio.Button>
				</Radio.Group>

				{/* 组件尺寸配置 */}
				<Divider>组件尺寸配置</Divider>
				<Radio.Group value={compSize} onChange={sizeHandle}>
					<Radio.Button value="small">Small</Radio.Button>
					<Radio.Button value="middle">Middle</Radio.Button>
					<Radio.Button value="large">Large</Radio.Button>
				</Radio.Group>

				{/* 主题配置 */}
				<Divider>组件尺寸配置</Divider>
				<ColorPicker format={formatHex} showText value={themeVal} onFormatChange={setFormatHex} onChange={setColorHex} />
			</div>
			<Page />
		</Card>
	);
};

export default Theme;
