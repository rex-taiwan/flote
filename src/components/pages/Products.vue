<template>
  <div class="mt-10">
    <div class="text-right mr-10">
      <v-btn text class="text-capitalize my-2" @click="openDialog">
        <v-icon small class="mx-2">mdi-plus-circle-outline</v-icon> Create
        Products</v-btn
      >
    </div>
    <v-simple-table
      fixed-header
      height="600px"
      class="mx-10 mt-10 grey lighten-5"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th width="120" class="text-left grey lighten-5">Category</th>
            <th width="60" class="text-left grey lighten-5">Name</th>
            <th width="120" class="text-right grey lighten-5">Orgin Price</th>
            <th width="120" class="text-right grey lighten-5">Fixed Price</th>
            <th width="80" class="text-left grey lighten-5">Function</th>
            <th width="80" class="text-left grey lighten-5">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.origin_price }}</td>
            <td class="text-right">{{ item.price }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">Enable</span>
              <span v-else>Not Enable</span>
            </td>
            <td>
              <v-btn text small light>Edit</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <!-- dialog -->
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="subtitle-1 black white--text" primary-title>
          Add Prodcuts
          <v-spacer></v-spacer>

          <v-btn text small><v-icon color="white">mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-form>
          <v-container>
            <v-row>
              <!-- Image area -->
              <v-col cols="4">
                <v-file-input
                  v-model="tempProduct.imageUrl"
                  placeholder="Upload your documents"
                  label="File input"
                  multiple
                  prepend-icon="mdi-paperclip"
                  class="mt-4"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="black">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>

                <img :src="tempProduct.imageUrl" alt="" />
              </v-col>

              <!-- title & description area -->
              <v-col cols="6">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="tempProduct.title"
                      label="Title Name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="tempProduct.category"
                      label="Category"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="tempProduct.unit"
                      label="Unit"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!--second partt -->

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="tempProduct.orgin_price"
                      :counter="10"
                      label="Origin Price"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="tempProduct.price"
                      :counter="10"
                      label="Fixed Price"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <div class="mt-10">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Description"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    v-model="tempProduct.description"
                  ></v-textarea>
                </div>

                <div class="mt-10">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Packing Content"
                    v-model="tempProduct.content"
                    value="was his axe  nearly through."
                  ></v-textarea>
                </div>

                <v-checkbox
                  v-model="tempProduct.is_enabled"
                  :true-value="1"
                  :false-value="0"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="black" text @click="updateProduct">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      products: [],
      tempProduct: {},
      dialog: false,
      isNew: false,
    };
  },
  methods: {
    openDialog(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        //  ES6寫法可以將item 的直寫到空的物件 避免傳參考特性
        this.isNew = false;
      }
      this.dialog = true;
    },
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const vm = this;
      //   因為要把products存到變數裡 所以必須使用const vm=this 確保可以儲存在products裡面
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
      });
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      }
      //   因為要把products存到變數裡 所以必須使用const vm=this 確保可以儲存在products裡面

      //   因為是一個物件 然後包著data 所以需要欄位外面需用data包起
      //   新增行為使用post 修改使用put
      this.$http.post(api, { data: vm.tempProduct }).then(response => {
        if (response.data.success) {
          this.dialog = false;
          vm.getProducts();
        } else {
          this.dialog = false;
          vm.getProducts();
        }
        // vm.products = response.data.products
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
