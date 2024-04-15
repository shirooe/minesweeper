import { Button, Form, Input, Radio, Space } from 'antd';
import { difficulty, label } from '@/shared/constants';
import type { FormValues, GameData } from '@/shared/types';
import styles from './settings.module.scss';

interface SettingsProps {
  handleSetData: (data: GameData, username: string) => void;
}

export const Settings = ({ handleSetData }: SettingsProps) => {
  const onFinish = ({ username, level }: FormValues) => {
    handleSetData(difficulty[level], username);
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
            {Object.keys(difficulty).map((key) => (
              <Radio key={key} value={key}>
                {label[key]}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Начать игру</Button>
      </Form.Item>
    </Form>
  );
};
