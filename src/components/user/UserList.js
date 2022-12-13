import { useEffect, useReducer } from "react"
import { userApi } from "../../apis/user"
// styling is done using MATERIAL UI, v5
import { Typography, Paper, Grid } from "@mui/material";
import CircularProgress from "../../utils/CircularProgress";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomStyles from "../../styles/Users";

const Styles = CustomStyles(Paper, Typography, Grid)

const initialData = {
  users: {data: [], limit: 10, page: 0, total: 0},
  error: "",
  loadingMore: false,
  initializing: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.fieldValue };
    case "updateBooleans":
      return { ...state, loadingMore: false, initializing: false };
    case "reset":
      return initialData;
    default:
      return state;
  }
};


function UserList() {

  const [data, setData] = useReducer(reducer, initialData);
  const usersList = data.users.data;

    const getUserList = async (page, limit) => {
        const result = await userApi.getUsers(page, limit);
        if(result.status === 200){
        setData({
          type: "update",
          field: "users",
          fieldValue: result.response,
        });
    } else {
      setData({
        type: "update",
        field: "error",
        fieldValue: result.error.message,
      });
    }
    setData({ type: "updateBooleans" });
    }
    const limit = data.users.limit;
    const page = data.users.page;
    const total = data.users.total
    const numberOfPages = Math.ceil(total / limit);//round it up
    const clientCurrentPage = page + 1;

    const handleLoadMore = (e, page) => {
      setData({
        type: "update",
        field: "loadingMore",
        fieldValue: true,
      });
      setData({
        type: "update",
        field: "users",
        fieldValue: {...data.users, page: page - 1},
      });
    }

    const handlePerPage = (e) => {
      setData({
        type: "update",
        field: "loadingMore",
        fieldValue: true,
      });
      setData({
        type: "update",
        field: "users",
        fieldValue: {...data.users, limit: e.target.value, page: 0}
      });
    }

    useEffect(() => {
        getUserList(page, limit)
    }, [page, limit])

  return (
    <>
    {!data.initializing ?
    <>
<Styles.PageContent>
        {/* Design list */}
          <Styles.UserCard container style={{position: "relative"}}>
            {/* iterate over designs and display them */}
            {usersList.map((item) => (
              <Grid 
              key={item.id} item xs={12} 
              sx={{ marginBottom: 1, opacity: !data.loadingMore ? 1 : 0.5 }}
              >
                <Styles.Item elevation={8}>
                  <Styles.UserCardContent container flexWrap="nowrap">
                    
                    <Grid item xs={1}>
                    <Styles.ImageContainer>
                      <Styles.Image 
                      src={item.picture} 
                      alt={`${item.firstName} ${item.lastName}`} 
                      />
                    </Styles.ImageContainer>
                    </Grid>
                    
                    <Grid
                      item
                      xs={11}
                      style={{paddingLeft: 20}}
                    >
                      <Styles.TextContainer>
                      <Styles.UsernameText noWrap>
                        {`${item.title} ${item.firstName} ${item.lastName}`}
                      </Styles.UsernameText>
                      </Styles.TextContainer>
            </Grid> 
                  </Styles.UserCardContent>
                </Styles.Item>
              </Grid>
            ))}
            <Typography>
              {data.error}
            </Typography>
            {/* Show loading icon when laoding more user */}
            {!data.loadingMore ? "" : <CircularProgress />}
          </Styles.UserCard>
      </Styles.PageContent>

    <Styles.PaginationContainer>
    <FormControl variant="outlined" sx={{ m: 2, width: 100 }} size="small">
    <InputLabel id="demo-select-small">Per page</InputLabel>
        <Select
          labelId="perPage"
          id="perPageId"
          value={limit}
          onChange={handlePerPage}
          label="Per page"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

    <Stack spacing={2}>
      <Pagination 
      count={numberOfPages} 
      page={clientCurrentPage}
      shape="rounded" 
      color="primary"
      onChange={handleLoadMore}
      />
    </Stack>
    </Styles.PaginationContainer>
    </>
     : <CircularProgress /> }
    </>
  )
}

export default UserList