# API Builder 사용 예시

## API Builder - Axios

```typescript
import ApiBuilder from './apiBuilder';

// 사용자 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
}

// API 엔드포인트 상수
const API_ENDPOINTS = {
  USERS: '/users',
  USER_DETAIL: (id: number) => `/users/${id}`,
};

// 사용자 목록 조회 API
export const getUsersApi = () => {
  return ApiBuilder.create<void, User[]>(API_ENDPOINTS.USERS).setMethod('GET');
};

// 특정 사용자 조회 API
export const getUserApi = (userId: number) => {
  return ApiBuilder.create<void, User>(
    API_ENDPOINTS.USER_DETAIL(userId),
  ).setMethod('GET');
};

// 사용자 생성 API
export const createUserApi = () => {
  return ApiBuilder.create<User, User>(API_ENDPOINTS.USERS).setMethod('POST');
};

// 사용자 수정 API
export const updateUserApi = (userId: number) => {
  return ApiBuilder.create<Partial<User>, User>(
    API_ENDPOINTS.USER_DETAIL(userId),
  ).setMethod('PUT');
};

// 사용자 삭제 API
export const deleteUserApi = (userId: number) => {
  return ApiBuilder.create<void, void>(
    API_ENDPOINTS.USER_DETAIL(userId),
  ).setMethod('DELETE');
};
```

## API Builder - React-Query

```typescript
// 컴포넌트 내에서 간단히 사용하는 예시
const MyComponent = () => {
  // GET 요청 예시
  const { data: todos } = useApiQuery(
    ApiBuilder.create<void, Todo[]>('/todos').setMethod('GET'),
    'todos'
  );

  // POST 요청 예시
  const todoMutation = useApiMutation(
    ApiBuilder.create<TodoInput, Todo>('/todos').setMethod('POST')
  );

  const handleCreateTodo = (newTodo: TodoInput) => {
    todoMutation.mutate(newTodo);
  };

  return (/* JSX */);
};
```
