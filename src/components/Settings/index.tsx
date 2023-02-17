import { DifficultData, FormValues } from '@/shared/interfaces';
import { difficult } from '@/shared/utils/constants';
import { Button, Form, Input, Radio, Space } from 'antd';
import styles from './index.module.scss';

interface SettingsProps {
  handleSetData: (data: DifficultData, username: string) => void;
}

export const Settings = ({ handleSetData }: SettingsProps) => {
  const onFinish = ({ username, level }: FormValues) => {
    handleSetData(difficult[level], username);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуйста введите свое имя' }]}
        label="Введите имя"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="level"
        label="Сложность"
        initialValue={'easy'}
        className={styles.difficult}
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="easy">Простой 8x8, 10 мин</Radio>
            <Radio value="medium">Средний 16x16, 40 мин</Radio>
            <Radio value="hard">Сложный 32x16, 100 мин</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Начать игру</Button>
      </Form.Item>
    </Form>
  );
};
